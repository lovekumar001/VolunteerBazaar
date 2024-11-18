const express = require("express");
const router = express.Router();
const db = require("../db"); // Import the database connection

// Get all volunteer activities
router.get("/", (req, res) => {
    const sql = "SELECT * FROM volunteer_activities";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get a specific activity by id
router.get("/:id", (req, res) => {
    const activityId = req.params.id;
    const sql = "SELECT * FROM volunteer_activities WHERE id = ?";
    db.query(sql, [activityId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: "Activity not found" });
        }
        res.json(result[0]);
    });
});

module.exports = router;
