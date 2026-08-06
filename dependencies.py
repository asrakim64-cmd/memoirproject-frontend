from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
import os

# This tells FastAPI to look for an "Authorization: Bearer <token>" header
security = HTTPBearer()

# You will get this from your Supabase Dashboard (Settings -> API -> JWT Secret)
# and put it in your .env file
SUPABASE_JWT_SECRET = os.getenv("SUPABASE_JWT_SECRET") 

def verify_supabase_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        # 1. MATHEMATICAL VERIFICATION: This checks the signature against your secret key.
        # If a hacker tries to forge a token, this will fail immediately.
        payload = jwt.decode(
            token, 
            SUPABASE_JWT_SECRET, 
            algorithms=["HS256"], 
            options={"verify_aud": False}
        )
        
        # 2. EXTRACTION: 'sub' (subject) in a JWT is the unique user ID from Supabase Auth.
        return payload.get("sub") 
        
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired. Please log in again.")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token. Authentication failed.")