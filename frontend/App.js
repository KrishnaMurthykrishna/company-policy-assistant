import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMsg = { role: "user", text: input };

    const res = await axios.post("http://127.0.0.1:8000/ask", {
      question: input,
    });

    const botMsg = {
      role: "bot",
      text: res.data.answer + "\n\n📄 Source: " + res.data.source,
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📘 Company Policy Assistant</h2>

      <div style={{ minHeight: 300 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: 10 }}>
            <b>{m.role === "user" ? "You" : "AI"}:</b> {m.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a policy question..."
        style={{ width: 300 }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}