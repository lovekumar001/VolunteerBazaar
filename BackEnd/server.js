const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parses JSON bodies
app.use(cors()); // Enables CORS
app.use(morgan("dev")); // Logs HTTP requests
app.use(express.json()); // Parses JSON bodies (redundant with bodyParser)

// Import routes
const authRoutes = require("./Routes/auth"); // Authentication routes
const userRoutes = require("./Routes/users"); // Users routes user list
const actRoutes = require("./Routes/activities"); //activities list
// Use routes
app.use("/auth", authRoutes); // Routes for signup and login
app.use("/users", userRoutes); // Routes for volunteers/users data
app.use("/activities", actRoutes); // Routes for volunteers/users data

// Root route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
