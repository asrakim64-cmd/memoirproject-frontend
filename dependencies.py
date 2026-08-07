import os
import jwt
from jwt import PyJWKClient
from fastapi import HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv

load_dotenv()

security = HTTPBearer()

def verify_supabase_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    
    try:
        unverified_header = jwt.get_unverified_header(token)
        alg = unverified_header.get("alg")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token format")

    try:
        if alg == "HS256":
            jwt_secret = os.getenv("SUPABASE_JWT_SECRET")
            if not jwt_secret:
                raise HTTPException(status_code=500, detail="Missing SUPABASE_JWT_SECRET in .env file")
            
            payload = jwt.decode(
                token, 
                jwt_secret, 
                algorithms=["HS256"], 
                audience="authenticated"
            )
            
        elif alg in ["RS256", "ES256"]:
            supabase_url = "https://fqpizscquprqqubsaymq.supabase.co"
            jwks_url = f"{supabase_url}/auth/v1/.well-known/jwks.json"
            
            jwks_client = PyJWKClient(jwks_url)
            signing_key = jwks_client.get_signing_key_from_jwt(token)
            
            payload = jwt.decode(
                token, 
                signing_key.key, 
                algorithms=[alg], 
                audience="authenticated"
            )
        else:
            raise HTTPException(status_code=401, detail=f"Unsupported algorithm: {alg}")

        user_uid = payload.get("sub")
        if not user_uid:
            raise HTTPException(status_code=401, detail="Token is missing the user ID")
            
        return user_uid
        
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Your session has expired.")
    except jwt.InvalidTokenError as e:
        raise HTTPException(status_code=401, detail=f"Invalid authentication token: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Token verification failed: {str(e)}")