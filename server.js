export default function handler(req, res) {
    const expressions = {
        normal: ["0b00000", "0b01110", "0b10001", "0b10001", "0b10001", "0b10001", "0b01110", "0b00000"],
        blink:  ["0b00000", "0b00000", "0b01110", "0b00000", "0b00000", "0b01110", "0b00000", "0b00000"],
        left:   ["0b00000", "0b01110", "0b11001", "0b10001", "0b10001", "0b11001", "0b01110", "0b00000"],
        right:  ["0b00000", "0b01110", "0b10011", "0b10001", "0b10001", "0b10011", "0b01110", "0b00000"]
    };

    const { type } = req.query;
    const expression = expressions[type] || expressions.normal;

    // Ensure the binary strings are sent as strings in JSON
    res.status(200).json({ expression: expression.map(bin => String(bin)) });
}
