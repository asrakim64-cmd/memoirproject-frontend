from fastapi import FastAPI
from routers import user 

app = FastAPI(title="Memoir App API") 

@app.get("/")
def read_root():
    return {"message": "API is successfully running!"}