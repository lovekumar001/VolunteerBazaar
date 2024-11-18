const mysql = require("mysql2");
require("dotenv").config(); // To use environment variables

// Create a MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit the process if the database connection fails
    }
    console.log("Connected to the MySQL database.");
});

module.exports = db; // Export the database connection
