from fastapi import FastAPI
from pydantic import BaseModel
from policies import POLICIES

app = FastAPI()

class Query(BaseModel):
    question: str

def simple_retrieval(question: str):
    q = question.lower()

    if "vacation" in q or "leave" in q:
        return "vacation"
    if "travel" in q or "reimburse" in q:
        return "travel"
    if "parental" in q:
        return "parental_leave"

    return None

@app.post("/ask")
def ask(query: Query):
    key = simple_retrieval(query.question)

    if key:
        answer = POLICIES[key]
        source = f"Policy Document → {key}.pdf"
    else:
        answer = "Sorry, I couldn't find relevant policy information."
        source = "No source found"

    return {
        "question": query.question,
        "answer": answer,
        "source": source
    }