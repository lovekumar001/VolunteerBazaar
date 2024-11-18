const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db"); // Ensure this points to your database connection

const router = express.Router();

// Regex for validating email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Signup route
router.post("/signup", async (req, res) => {
    const { email, password, userType } = req.body;

    // Check if all fields are provided
    if (!email || !password || !userType) {
        return res.status(400).json({ message: "Email, password, and user type are required." });
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    // Check password strength
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    try {
        // Check if the email already exists
        const emailCheckQuery = "SELECT * FROM volunteers_data WHERE email = ?";
        const [existingUser] = await db.promise().query(emailCheckQuery, [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email is already registered." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Insert user into the database
        const sql = "INSERT INTO volunteers_data (email, password, user_type) VALUES (?, ?, ?)";
        const [result] = await db.promise().query(sql, [email, hashedPassword, userType]);

        res.status(201).json({
            id: result.insertId,
            message: "Signup successful.",
        });
    } catch (err) {
        console.error("Error during signup:", err.message);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Check if both fields are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        // Check if the email exists in the database
        const sql = "SELECT * FROM volunteers_data WHERE email = ?";
        const [users] = await db.promise().query(sql, [email]);

        if (users.length === 0) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const user = users[0];

        // Compare the hashed password with the provided password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Generate JWT (token)
        const token = jwt.sign(
            { id: user.user_id, email: user.email, userType: user.user_type },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful.",
            token,
            user: {
                id: user.user_id,
                email: user.email,
                userType: user.user_type,
            },
        });
    } catch (err) {
        console.error("Error during login:", err.message);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

module.exports = router;
