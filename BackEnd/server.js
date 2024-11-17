const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();



// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Import routes
const userRoutes = require("./routes/users");

// Use routes
app.use("/users", userRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
