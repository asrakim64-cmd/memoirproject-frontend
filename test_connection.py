from database import engine

def test_db():
    try:
        # Attempt to open a live connection to Supabase
        with engine.connect() as connection:
            print("✅ Success! Connected to the Supabase database.")
    except Exception as e:
        print("❌ Connection failed!")
        print(f"Error: {e}")

if __name__ == "__main__":
    test_db()