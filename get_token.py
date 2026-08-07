import urllib.request
import json

url = "https://fqpizscquprqqubsaymq.supabase.co/auth/v1/token?grant_type=password"

api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcGl6c2NxdXBycXF1YnNheW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5NDY5NjUsImV4cCI6MjEwMTUyMjk2NX0.2VbuUfMTDsG-eqEisfCYDTeqKf1852uzkYKf6RwonmA"

headers = {
    "apikey": api_key,
    "Content-Type": "application/json"
}

# IMPORTANT: Ensure test@example.com exists in Supabase Authentication -> Users 
# AND that the password is at least 6 characters long!
data = {
    "email": "hafsausman1512@gmail.com",
    "password": "123456" 
}

req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode())
        print("\n✅ SUCCESS! Here is your access_token to paste into Swagger:\n")
        print(result["access_token"])
        print("\n")
except urllib.error.HTTPError as e:
    error_info = e.read().decode()
    print(f"\n❌ SUPABASE REJECTED IT: {e.code}\n{error_info}\n")
    