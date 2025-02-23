const express = require("express");

const app = express();
const PORT = 8000;

// Sample LCD segment expressions
const expressions = {
    normal: [0b00000, 0b01110, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110, 0b00000],
    blink:  [0b00000, 0b00000, 0b01110, 0b00000, 0b00000, 0b01110, 0b00000, 0b00000],
    left:   [0b00000, 0b01110, 0b11001, 0b10001, 0b10001, 0b11001, 0b01110, 0b00000],
    right:  [0b00000, 0b01110, 0b10011, 0b10001, 0b10001, 0b10011, 0b01110, 0b00000]
};

// API route to send expressions
app.get("/expression", (req, res) => {
    const { type } = req.query;
    res.json({ expression: expressions[type] || expressions.normal });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
