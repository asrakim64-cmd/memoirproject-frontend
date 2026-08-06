from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from schemas.user import UserCreate, UserResponse
from service import user as user_service
from dependencies import verify_supabase_token

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/", response_model=UserResponse)
def create_new_user(
    user_data: UserCreate, 
    db: Session = Depends(get_db),
    # THE BOUNCER: FastAPI runs this first. It won't let the code proceed 
    # unless the token is valid, and it hands you the secure UID.
    auth_provider_uid: str = Depends(verify_supabase_token) 
):
    try:
        # We pass both the DTO data and the secure UID to the service layer
        return user_service.create_user(
            db=db, 
            user_data=user_data, 
            auth_provider_uid=auth_provider_uid
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail="User creation failed. Email might already exist.")