import os
import jwt
from fastapi import HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

# This tells FastAPI to look for a "Bearer" token in the headers
security = HTTPBearer()

def verify_supabase_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    secret = os.getenv("SUPABASE_JWT_SECRET")
    
    if not secret:
        raise HTTPException(status_code=500, detail="Server misconfiguration: Missing JWT Secret")

    try:
        # We mathematically verify Supabase created this token
        payload = jwt.decode(
            token, 
            secret, 
            algorithms=["HS256"], 
            audience="authenticated"
        )
        
        # 'sub' (subject) is the standard JWT field for the user's ID
        user_uid = payload.get("sub")
        
        if not user_uid:
            raise HTTPException(status_code=401, detail="Token is missing the user ID")
            
        return user_uid
        
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Your session has expired. Please log in again.")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid authentication token.")