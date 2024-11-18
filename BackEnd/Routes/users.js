const express = require("express");
const router = express.Router();
const db = require("../db"); // Database connection

// Get all volunteers
router.get("/", (req, res) => {
    const sql = "SELECT * FROM volunteers_data";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get a single volunteer by user_id
router.get("/:id", (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT * FROM volunteers_data WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: "Volunteer not found" });
        }
        res.json(result[0]);
    });
});

// Add a new volunteer
router.post("/", (req, res) => {
    const {
        name,
        gender,
        age,
        city,
        province,
        degree,
        field,
        university,
        employment_status,
        bio,
        skills,
        causes_interested_in,
        event_types,
    } = req.body;

    const sql = `INSERT INTO volunteers_data 
        (name, gender, age, city, province, degree, field, university, employment_status, bio, skills, causes_interested_in, event_types)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        name,
        gender,
        age,
        city,
        province,
        degree,
        field,
        university,
        employment_status,
        bio,
        skills,
        causes_interested_in,
        event_types,
    ], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, message: "Volunteer added successfully" });
    });
});

// Update a volunteer
router.put("/:id", (req, res) => {
    const userId = req.params.id;
    const {
        name,
        gender,
        age,
        city,
        province,
        degree,
        field,
        university,
        employment_status,
        bio,
        skills,
        causes_interested_in,
        event_types,
    } = req.body;

    const sql = `UPDATE volunteers_data SET 
        name = ?, gender = ?, age = ?, city = ?, province = ?, degree = ?, field = ?, university = ?, employment_status = ?, bio = ?, skills = ?, causes_interested_in = ?, event_types = ?
        WHERE user_id = ?`;

    db.query(sql, [
        name,
        gender,
        age,
        city,
        province,
        degree,
        field,
        university,
        employment_status,
        bio,
        skills,
        causes_interested_in,
        event_types,
        userId,
    ], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Volunteer updated successfully" });
    });
});

// Delete a volunteer
router.delete("/:id", (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM volunteers_data WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Volunteer deleted successfully" });
    });
});

module.exports = router;
