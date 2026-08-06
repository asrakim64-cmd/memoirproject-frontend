from pydantic import BaseModel, EmailStr
from datetime import datetime
import uuid
from typing import Optional

# What the frontend sends
class UserCreate(BaseModel):
    email: EmailStr
    full_name: str
    # Notice we removed auth_provider_uid here!

# What the API returns
class UserResponse(BaseModel):
    id: uuid.UUID
    email: EmailStr
    full_name: str
    auth_provider_uid: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True