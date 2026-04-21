<div align="center">

<img src="https://img.shields.io/badge/HireIQ-AI%20Tutor%20Screening-22d3ee?style=for-the-badge&labelColor=050810&color=22d3ee" alt="HireIQ" />

# HireIQ — AI Tutor Screening Platform

**Voice-native AI interviewer that screens tutors 10× faster with evidence-grounded evaluation**

Built for Cuemath · Screens communication clarity, patience, warmth, empathy & simplicity

[![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.168-black?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Groq](https://img.shields.io/badge/Groq-LLaMA%203.3-f55036?style=flat-square)](https://groq.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

<br />

<img width="1900" height="833" alt="image" src="https://github.com/user-attachments/assets/f3a05866-9005-4911-8a0b-0f0bd4acf044" />


</div>

---

## What is HireIQ?

Cuemath hires hundreds of tutors every month. Every one needs screening — can they explain clearly? Are they patient? Can they simplify math for a 9-year-old? Do children actually want to learn with them?

**HireIQ replaces expensive, slow human phone screens with a 10-minute AI voice interview** that adapts to each candidate, evaluates 6 core dimensions, and delivers a structured report with direct transcript evidence — all automatically.

```
Candidate speaks → AI listens → adapts in real time → scores with evidence → recruiter decides
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎤 **Voice-Native** | Candidates speak naturally — Web Speech API transcribes in real time |
| 🧠 **Adaptive AI** | Follows up on vague answers, probes deeper on strong ones |
| 📊 **Evidence-Grounded** | Every score cites a direct transcript quote — no black boxes |
| ⚡ **Fast Inference** | Groq LLaMA 3.3 70B — responses in under 2 seconds |
| 🎯 **6 Dimensions** | Clarity, Simplicity, Empathy, Warmth, Fluency, Math Teaching |
| 🤖 **Recruiter Copilot** | Ask any question about a candidate, AI answers from transcript |
| 🌐 **3D Interface** | Three.js globe with orbiting labels, Framer Motion animations |
| 📋 **Auto Evaluation** | Full structured report generated post-interview automatically |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  React 18 + Vite + TypeScript + Three.js + Framer Motion    │
│                                                              │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Navbar  │  │  Interview   │  │  Evaluation Report   │  │
│  │  (SaaS)  │  │  (Voice UI)  │  │  (Charts + Scores)   │  │
│  └──────────┘  └──────────────┘  └──────────────────────┘  │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────────────┐ │
│  │  Recruiter Dashboard │  │  Floating Copilot Chat       │ │
│  │  (Candidate Table)   │  │  (AI Q&A on transcript)      │ │
│  └──────────────────────┘  └──────────────────────────────┘ │
└─────────────────────────┬───────────────────────────────────┘
                          │ REST API (Axios)
                          │ VITE_API_URL
┌─────────────────────────▼───────────────────────────────────┐
│                        BACKEND                               │
│              FastAPI + Python 3.11 + Uvicorn                 │
│                                                              │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │   Session   │  │ Conversation │  │    Evaluation     │  │
│  │   Router    │  │   Router     │  │     Router        │  │
│  └─────────────┘  └──────────────┘  └───────────────────┘  │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Services Layer                          │    │
│  │  interview_engine  │  adaptive_controller            │    │
│  │  scoring_engine    │  transcript_analyzer            │    │
│  │  evaluation_engine │  conversation_manager           │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                   │
│                ┌─────────▼─────────┐                        │
│                │    LLM Client     │                         │
│                │  Groq / OpenAI /  │                         │
│                │    Anthropic      │                         │
│                └───────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
hireiq/
├── backend_v2/                    # FastAPI Backend
│   ├── main.py                    # App entry point, CORS, router registration
│   ├── requirements.txt           # Python dependencies
│   ├── railway.toml               # Railway deployment config
│   ├── Procfile                   # Process definition
│   ├── models/
│   │   └── schemas.py             # All Pydantic models
│   ├── routers/
│   │   ├── session.py             # POST /api/session/start
│   │   ├── conversation.py        # POST /api/conversation/turn
│   │   ├── evaluation.py          # POST /api/evaluation/generate
│   │   └── recruiter.py           # GET /api/recruiter/candidates
│   └── services/
│       ├── llm_client.py          # Groq/OpenAI/Anthropic abstraction
│       ├── interview_engine.py    # Question bank, dynamic generation
│       ├── adaptive_controller.py # Response classifier (rule-based)
│       ├── conversation_manager.py# Session state (in-memory)
│       ├── scoring_engine.py      # 6-dimension LLM scoring
│       ├── evaluation_engine.py   # Full evaluation pipeline
│       └── transcript_analyzer.py # Pre-compute evidence from transcript
│
└── hireiq-frontend/               # React Frontend
    ├── src/
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Navbar.tsx     # SaaS navbar with pill nav
    │   │   │   └── Layout.tsx     # Page wrapper
    │   │   ├── three/
    │   │   │   └── GlobeHero.tsx  # Three.js globe (no drei Text)
    │   │   └── ui/
    │   │       └── index.tsx      # Waveform, SignalBadge, Counter
    │   ├── pages/
    │   │   ├── HomePage.tsx       # Landing with 3D globe
    │   │   ├── InterviewPage.tsx  # Voice interview UI
    │   │   ├── EvaluationPage.tsx # Full report with charts
    │   │   └── RecruiterPage.tsx  # Dashboard + copilot
    │   ├── hooks/
    │   │   └── useSpeech.ts       # Web Speech API wrapper
    │   ├── store/
    │   │   └── index.ts           # Zustand global state
    │   └── lib/
    │       └── api.ts             # Axios client
    ├── .env.development.local     # Local → deployed backend
    └── .env.production            # Vercel → deployed backend
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Groq API key (free at [console.groq.com](https://console.groq.com))

### Backend Setup

```bash
# Clone the repo
git clone https://github.com/NeuroNaman/hireiq-backend.git
cd backend_v2

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env and add your GROQ_API_KEY

# Start server
uvicorn main:app --reload --port 8000
```

Backend runs at `http://localhost:8000`
API docs at `http://localhost:8000/docs`

### Frontend Setup

```bash
git clone https://github.com/NeuroNaman/hireiq-frontend.git
cd hireiq-frontend

# Install dependencies
npm install

# Create env file for local dev
echo "VITE_API_URL=" > .env.development.local
# Leave empty to use Vite proxy (localhost:8000)
# Or set to your deployed backend URL

# Start dev server
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## ⚙️ Environment Variables

### Backend `.env`

```env
# LLM Provider — groq | openai | anthropic
LLM_PROVIDER=groq

# Groq (recommended — fastest)
GROQ_API_KEY=gsk_xxxxxxxxxxxx
GROQ_MODEL=llama-3.3-70b-versatile

# OpenAI (fallback)
OPENAI_API_KEY=sk-xxxxxxxxxxxx
OPENAI_MODEL=gpt-4o-mini

# Anthropic (fallback)
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
ANTHROPIC_MODEL=claude-3-haiku-20240307

# CORS — comma separated origins or *
CORS_ORIGINS=http://localhost:5173,https://your-frontend.vercel.app
```

### Frontend `.env.production`

```env
VITE_API_URL=https://your-backend.up.railway.app
```

---

## 🎯 How It Works

### 1. Interview Flow

```
Candidate fills form (name, city, experience)
        ↓
Backend generates personalized 6 dynamic questions
        ↓
Alex (AI interviewer) greets candidate via TTS
        ↓
Candidate speaks → SpeechRecognition → text
        ↓
Adaptive Controller classifies response:
  strong | ok | vague | short | complex | off_topic | silent
        ↓
If vague/short → follow-up question (max 2 per question)
If strong      → probe deeper
If ok          → move to next question
        ↓
After 8 questions → closing → interview complete
```

### 2. Evaluation Pipeline

```
Transcript → Pre-compute evidence (word counts, examples, empathy signals)
           → LLM scoring with evidence grounding (6 dimensions × 1-10)
           → Weighted composite score
           → Verdict normalization (Strong Hire | Consider | Reject)
           → Narrative generation (strengths, weaknesses, coaching notes)
           → Full report with supporting quotes
```

### 3. Scoring Dimensions

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| Communication Clarity | 20% | Structured explanations, coherent logic |
| Ability to Simplify | 25% | Analogies, real-world examples, age-appropriate language |
| Patience & Empathy | 20% | How they handle frustration, emotional intelligence |
| Warmth & Child Connect | 15% | Child-first language, encouragement |
| English Fluency | 10% | Natural articulation, vocabulary |
| Math Teaching Ability | 10% | Conceptual vs rote, intuitive explanations |

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| FastAPI | 0.111 | REST API framework |
| Uvicorn | 0.30 | ASGI server |
| Pydantic | 2.7 | Data validation |
| Groq SDK | 0.9 | LLM inference |
| Python-dotenv | 1.0 | Environment management |

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3 | UI framework |
| TypeScript | 5.6 | Type safety |
| Vite | 5.4 | Build tool |
| Three.js | 0.168 | 3D globe visualization |
| @react-three/fiber | 8.17 | React renderer for Three.js |
| Framer Motion | 11.11 | Animations |
| Zustand | 5.0 | State management |
| Recharts | 2.13 | Evaluation charts |
| Axios | 1.7 | HTTP client |

---

## 📡 API Reference

### Session
```
POST /api/session/start
Body: { candidate: { name, city?, experience_years? } }
Returns: { session_id, greeting, status }
```

### Conversation
```
POST /api/conversation/turn
Body: { session_id, candidate_text }
Returns: { interviewer_text, adaptive_signal, is_interview_complete, question_progress }
```

### Evaluation
```
POST /api/evaluation/generate
Body: { session_id }
Returns: Full EvaluationReport with dimensions, scores, verdict

GET /api/evaluation/{session_id}
Returns: Cached evaluation report
```

### Recruiter
```
GET  /api/recruiter/candidates
Returns: List of all candidate summaries with scores

POST /api/recruiter/copilot
Body: { session_id, question }
Returns: { answer } — AI answer grounded in transcript

GET  /api/recruiter/report/{session_id}
Returns: Full report dict including extra fields
```

---

## 🚢 Deployment

### Backend → Railway

```bash
# 1. Push to GitHub
git push origin main

# 2. Railway dashboard → New Project → Deploy from GitHub
# 3. Add environment variables in Railway Variables tab
# 4. Settings → Generate Domain
```

### Frontend → Vercel

```bash
# 1. Add .env.production with your Railway URL
echo "VITE_API_URL=https://your-app.up.railway.app" > .env.production

# 2. Push to GitHub
git push origin main

# 3. Vercel → New Project → Import → Deploy
# 4. Add VITE_API_URL in Vercel Environment Variables
```

---

## 🔮 Roadmap

- [ ] **PostgreSQL** — Replace in-memory state with persistent database
- [ ] **Whisper STT** — Replace Web Speech API for cross-browser + accent support
- [ ] **ElevenLabs TTS** — Higher quality, more natural AI voice
- [ ] **WebSocket streaming** — Real-time token streaming for faster perceived responses
- [ ] **Auth + Multi-tenancy** — JWT login, company isolation, recruiter roles
- [ ] **Background evaluation** — Celery queue so evaluation doesn't block HTTP
- [ ] **Hindi support** — Multilingual interviews for broader tutor reach
- [ ] **Analytics dashboard** — Hiring funnel metrics, cohort comparisons
- [ ] **Candidate portal** — Post-interview feedback and coaching notes delivery
- [ ] **Interview recording** — Audio + transcript playback for recruiters

---

## 🤝 Contributing

```bash
# Fork the repo
# Create a feature branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "add: your feature description"

# Push and open a PR
git push origin feature/your-feature
```

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ for Cuemath's hiring team
</div>
