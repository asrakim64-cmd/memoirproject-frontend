from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "user_account"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(CITEXT, unique=True, nullable=False)
    full_name = Column(String, nullable=True)
        
    # Timestamps
    last_login_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deleted_at = Column(DateTime(timezone=True), nullable=True)

    # Ensures full_name isn't just blank spaces, perfectly matching the SQL constraint
    __table_args__ = (
        CheckConstraint("btrim(full_name) <> ''", name="user_account_name_not_blank"),
    )