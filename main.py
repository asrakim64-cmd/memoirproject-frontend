from fastapi import FastAPI, Depends
from routers import user 
from dependencies import verify_supabase_token

app = FastAPI(title="Memoir App API") 

app.include_router(user.router)

@app.get("/")
def read_root():
    return {"message": "API is successfully running!"}

@app.post("/api/subscribe")
def process_subscription(data: dict, user: dict = Depends(verify_supabase_token)):
    user_id = user.get("sub")
    plan = data.get("plan")
    
    return {"status": "success", "message": f"Subscription active for user {user_id}"}