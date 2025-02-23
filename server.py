from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/expression', methods=['GET'])
def get_expression():
    return jsonify({"expression": "eyeOpen"})  # Replace with dynamic AI-generated expressions

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
