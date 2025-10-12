from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class TextGenRequest(BaseModel):
    context: str
    tone: str
    platform: str

class ImageGenRequest(BaseModel):
    prompt: str
    style: str
    format: str

@app.post("/generate-text")
def generate_text(req: TextGenRequest):
    # Placeholder Gemini API integration
    # Replace with actual Gemini API call
    return {"text": f"[Gemini AI] {req.context} ({req.tone}, {req.platform})"}

@app.post("/generate-image")
def generate_image(req: ImageGenRequest):
    # Placeholder NanoBanana API integration
    # Replace with actual NanoBanana API call
    return {"image_url": f"https://dummyimage.com/600x400/000/fff&text={req.prompt}"}

@app.post("/apply-brand-kit")
def apply_brand_kit(request: Request):
    # Placeholder Canva MCP API integration
    # Replace with actual Canva MCP API call
    data = await request.json()
    return {"status": "Brand kit applied", "input": data}

@app.post("/export")
def export_assets(request: Request):
    # Placeholder export logic
    # Replace with actual export logic
    data = await request.json()
    return {"status": "Exported", "input": data}
