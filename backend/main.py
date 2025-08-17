from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

# Allow frontend to talk to backend (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Pydantic models
class TravelExperience(BaseModel):
    id: int
    destination: str
    date: str
    description: str
    highlights: List[str]
    images: List[str]
    category: str


class TravelCreate(BaseModel):
    destination: str
    date: str
    description: str
    highlights: List[str]
    images: List[str]
    category: str


# Sample data
travel_experiences = [
    {
        "id": 1,
        "destination": "Mumbai, Maharashtra",
        "date": "December 2024",
        "description": "Explored the bustling city of Mumbai, visited iconic landmarks and experienced the vibrant culture.",
        "highlights": [
            "Gateway of India",
            "Marine Drive",
            "Local Street Food",
            "Bollywood Studios",
        ],
        "images": [
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500"
        ],
        "category": "City",
    },
    {
        "id": 2,
        "destination": "Rajkot, Gujarat",
        "date": "November 2024",
        "description": "Visited family and explored the cultural heritage of Rajkot, known for its historical significance.",
        "highlights": [
            "Watson Museum",
            "Jubilee Garden",
            "Local Markets",
            "Traditional Food",
        ],
        "images": [
            "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500"
        ],
        "category": "Heritage",
    },
    {
        "id": 3,
        "destination": "Dwarka, Gujarat",
        "date": "October 2024",
        "description": "Spiritual journey to one of the four sacred Hindu pilgrimage sites, experiencing peace and devotion.",
        "highlights": [
            "Dwarkadhish Temple",
            "Rukmini Devi Temple",
            "Gomti Ghat",
            "Sunset Point",
        ],
        "images": [
            "https://images.unsplash.com/photo-1582544694556-f6ed5448e284?w=500"
        ],
        "category": "Spiritual",
    },
]

categories = ["All", "City", "Heritage", "Spiritual", "Nature", "Adventure"]


# Root route
@app.get("/")
def root():
    return {"message": "I'm Lucifer The Morning Star 🚀"}


# Travel API routes
@app.get("/api/travel")
def get_travel_experiences(category: Optional[str] = None):
    """Get all travel experiences or filter by category"""
    if category and category != "All":
        return [exp for exp in travel_experiences if exp["category"] == category]
    return travel_experiences


@app.get("/api/travel/categories")
def get_categories():
    """Get all travel categories"""
    return {"categories": categories}


@app.get("/api/travel/{experience_id}")
def get_travel_experience(experience_id: int):
    """Get a specific travel experience by ID"""
    experience = next(
        (exp for exp in travel_experiences if exp["id"] == experience_id), None
    )
    if not experience:
        raise HTTPException(status_code=404, detail="Experience not found")
    return experience


@app.post("/api/travel")
def create_travel_experience(experience: TravelCreate):
    """Create a new travel experience"""
    new_id = (
        max(exp["id"] for exp in travel_experiences) + 1 if travel_experiences else 1
    )
    new_experience = {"id": new_id, **experience.dict()}
    travel_experiences.append(new_experience)
    return new_experience


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
    return {"status": "success", "msg": f"Thanks {name}, I'll get back to you soon!"}
