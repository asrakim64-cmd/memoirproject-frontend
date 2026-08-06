from sqlalchemy.orm import Session
from model.user import UserAccount

def create_user_in_db(db: Session, email: str, full_name: str, auth_provider_uid: str):
    db_user = UserAccount(
        email=email,
        full_name=full_name,
        auth_provider_uid=auth_provider_uid 
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return db_user