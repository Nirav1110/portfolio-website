from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to talk to backend (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route
@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}

# Example: portfolio projects API
@app.get("/projects")
def get_projects():
    return [
        {"title": "Portfolio Website", "description": "My personal portfolio site."},
        {"title": "Weather App", "description": "Weather app built with Vue & Python."},
    ]

# Example: contact form
@app.post("/contact")
def send_contact(name: str, email: str, message: str):
    return {"status": "success", "msg": f"Thanks {name}, I’ll get back to you soon!"}
