import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv

# 1. Load the hidden Supabase URL from the .env file
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

# 2. Create the SQLAlchemy engine (the actual connection maker)
engine = create_engine(DATABASE_URL)

# 3. Create a session factory to use in your API later
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. Create the base class for your database models
Base = declarative_base()