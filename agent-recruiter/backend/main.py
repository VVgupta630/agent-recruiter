from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Agent Recruiter API", version="1.0.0")

# Enable CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JobDescriptionRequest(BaseModel):
    job_description: str

@app.post("/api/analyze-job")
async def analyze_job(payload: JobDescriptionRequest):
    jd = payload.job_description
    if not jd.strip():
        raise HTTPException(status_code=400, detail="Job description cannot be empty.")
    
    # 1. AI Criteria Extraction (Simulated workflow)
    extracted_skills = ["Python", "Machine Learning", "Data Analysis", "SQL", "AWS"]
    
    # 2. TinyFish Web Agent Discovery & Matching Engine Output
    candidates = [
        {
            "id": 1,
            "name": "Aanya Kapoor",
            "role": "Software Engineer",
            "skills": ["Python", "ML", "Data Analysis"],
            "fit_score": 92,
            "experience": "4 yrs",
            "evidence": "Python, 4 yrs AWS Experience, System Design Blog",
            "missing": ["Kubernetes"],
            "source": "https://linkedin.com/in/aanya-kapoor"
        },
        {
            "id": 2,
            "name": "Rohan Singh",
            "role": "Backend Developer",
            "skills": ["Python", "Machine Learning", "SQL"],
            "fit_score": 78,
            "experience": "3 yrs",
            "evidence": "Python 3+ yrs, Django Projects, PostgreSQL 2 yrs",
            "missing": ["AWS"],
            "source": "https://github.com/rohansingh"
        },
        {
            "id": 3,
            "name": "Karan Mehta",
            "role": "SDE",
            "skills": ["Python", "Deep Learning", "PyTorch"],
            "fit_score": 64,
            "experience": "2 yrs",
            "evidence": "Java 2+ yrs, Spring Boot Projects, SQL 2 yrs",
            "missing": ["Cloud Experience"],
            "source": "https://linkedin.com/in/karan-mehta"
        }
    ]
    
    return {
        "status": "success",
        "extracted_criteria": extracted_skills,
        "candidates": candidates
    }

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "project": "Agent Recruiter - Team Bitwise"}