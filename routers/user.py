from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from schemas.userDTO import UserCreate, UserResponse
from service import user as user_service
from dependencies import verify_supabase_token

# 1. Define the router variable that main.py is looking for
router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

# 2. Create the API endpoint to handle user onboarding
@router.post("/", response_model=UserResponse)
def create_new_user(user_data: UserCreate, db: Session = Depends(get_db),user_uid: str = Depends(verify_supabase_token)):
    try:
        # Pass the incoming data to your service layer to save in the database
        new_user = user_service.create_user(db=db, user_data=user_data,auth_provider_uid="user_uid")
        return new_user
    except Exception as e:
        # If something goes wrong (like a duplicate email), return a clear error
        raise HTTPException(status_code=400, detail=f"User could not be created: {str(e)}")