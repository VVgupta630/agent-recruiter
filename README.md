# Agent Recruiter 🚀
*From Job Description to an Explainable Candidate Shortlist.*[cite: 1]

Developed by **Team Bitwise** for **Critical Hacks 2026 (AI/ML Track)**[cite: 1, 7].

## 📖 Overview
Recruitment is traditionally manual, repetitive, and fragmented across multiple search tools and candidate profiles[cite: 2]. **Agent Recruiter** transforms unstructured job descriptions into a ranked, evidence-backed candidate shortlist using AI/NLP parsing and the **TinyFish Web Search API**[cite: 3, 5].

### Team Members[cite: 7]
* Vanshika Gupta (IGDTUW)[cite: 7]
* Chetna Garg (IGDTUW)[cite: 7]
* Aarnav Gahlot (USICT, GGSIPU)[cite: 7]
* Aditya Sharda (DTU)[cite: 7]
* Kartik Dabas (USICT, GGSIPU)[cite: 7]

---

## ✨ Key Features & Workflow[cite: 3, 5]
1. **Job Requirement Extraction:** Input any job description; the AI extracts key skills, experience requirements, and criteria[cite: 3, 5].
2. **TinyFish API Integration:** Dynamically discovers relevant candidate profiles and source links from permitted web sources[cite: 3, 4, 5].
3. **Explainable Matching Engine:** Scores candidates based on weighted skill matching and provides clear evidence, missing criteria, and source links[cite: 3, 4, 5].
4. **Recruiter-Controlled Shortlist:** Review, compare, and export shortlists with human oversight before final hiring decisions[cite: 4, 5].

---

## 🛠️ Tech Stack[cite: 5]
* **Frontend:** React.js, Tailwind CSS[cite: 5]
* **Backend:** Python, FastAPI[cite: 5]
* **AI & Search:** LLM/NLP parsing, **TinyFish Search API**[cite: 4, 5]

---

## 🚀 Getting Started

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000