from fastapi import FastAPI
from routers import user 

app = FastAPI(title="Memoir App API") 

# This connects the user router to your main app
app.include_router(user.router)

# A simple test route to ensure the server is alive
@app.get("/")
def read_root():
    return {"message": "API is successfully running!"}