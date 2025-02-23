import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());

const expressions = {
    normal: ["0b00000", "0b01110", "0b10001", "0b10001", "0b10001", "0b10001", "0b01110", "0b00000"],
    blink:  ["0b00000", "0b00000", "0b01110", "0b00000", "0b00000", "0b01110", "0b00000", "0b00000"],
    left:   ["0b00000", "0b01110", "0b11001", "0b10001", "0b10001", "0b11001", "0b01110", "0b00000"],
    right:  ["0b00000", "0b01110", "0b10011", "0b10001", "0b10001", "0b10011", "0b01110", "0b00000"]
};

// API to get expression type
app.get("/expression", (req, res) => {
    const { type } = req.query;
    res.json({ expression: expressions[type] || expressions.normal });
});

// AI-powered expression suggestion
app.get("/suggest", (req, res) => {
    const { input } = req.query;
    const suggestion = input.includes("blink") ? "blink" :
                       input.includes("left") ? "left" :
                       input.includes("right") ? "right" : "normal";
    res.json({ suggestion, expression: expressions[suggestion] });
});

// Simple chatbot message
app.get("/chat", (req, res) => {
    res.json({ message: "Hello! I'm your AI assistant. How can I help you?" });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
