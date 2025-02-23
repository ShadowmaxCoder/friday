CREATE TABLE expressions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    oled_pattern TEXT NOT NULL
);

CREATE TABLE conversation (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    response TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    frames TEXT NOT NULL,
    duration INT NOT NULL
);
