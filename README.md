📘 Company Policy Assistant

An AI-powered enterprise assistant that helps employees instantly find accurate answers from company policy documents using natural language. It provides grounded, cited responses to reduce confusion, improve productivity, and eliminate repetitive HR queries.

🚀 Problem Statement

Employees often struggle to find answers in long policy documents such as:

Leave policies
Travel reimbursement rules
Parental leave guidelines
Compliance documents

This leads to:

Time wasted searching PDFs
Repetitive HR questions
Inconsistent answers across teams
💡 Solution

Company Policy Assistant allows employees to simply ask questions like:

“How many vacation days can I carry forward?”
“What is the travel reimbursement process?”
“Am I eligible for parental leave?”

The system responds instantly with:

✅ Clear answers
📄 Source citations from policy documents
⚡ Fast retrieval using an AI-powered backend
🧠 Key Features
💬 Natural language chat interface
📄 Policy-based question answering
🔍 Simple retrieval-based AI engine (RAG-style)
📎 Source citation for every answer
⚡ Fast API-based backend
🖥️ React-based chat UI
🏗️ Architecture
User
  ↓
React Chat UI
  ↓
FastAPI Backend
  ↓
Policy Retrieval Layer (Mock RAG)
  ↓
Policy Documents (Knowledge Base)
🧰 Tech Stack
Frontend
React.js
Axios
Backend
FastAPI
Python
AI Layer
Rule-based retrieval (hackathon MVP)
Designed to be replaced with:
Microsoft Foundry IQ
Azure AI Search (vector DB)
Azure OpenAI
📂 Project Structure
company-policy-assistant/
│
├── backend/
│   ├── main.py
│   ├── policies.py
│   └── requirements.txt
│
├── frontend/
│   ├── App.js
│   ├── index.js
│   └── package.json
│
└── README.md
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/KrishnaMurthykrishna/company-policy-assistant.git
cd company-policy-assistant
2️⃣ Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000
3️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend runs at:

http://localhost:3000
🧪 Example Queries

Try asking:

“How many vacation days can I carry forward?”
“What is the travel reimbursement policy?”
“How does parental leave work?”
📎 Sample Response
Answer:
Employees can carry forward up to 5 unused vacation days per year.

Source:
Policy Document → vacation.pdf
