from sqlalchemy.orm import Session
from schemas.user import UserCreate
from repository import user as user_repo

def create_user(db: Session, user_data: UserCreate, auth_provider_uid: str):
    # This is where your business logic will go in the future.
    # For now, it simply passes the clean data down to the repository layer.
    
    return user_repo.create_user_in_db(
        db=db,
        email=user_data.email,
        full_name=user_data.full_name,
        auth_provider_uid=auth_provider_uid
    )