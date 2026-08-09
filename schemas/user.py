from pydantic import BaseModel, EmailStr
from datetime import datetime
import uuid
from typing import Optional

class UserResponse(BaseModel):
    id: uuid.UUID
    email: EmailStr
    full_name: str
    auth_provider_uid: str
    created_at: datetime

    class Config:
        from_attributes = True