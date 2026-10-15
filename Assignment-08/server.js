const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/studentDB";

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Simple root route (GET /)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Management REST API is running successfully!",
  });
});

// Mount student CRUD routes at /api/students
app.use("/api/students", studentRoutes);

// Connect to local MongoDB database and start Express server
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB successfully at: ${MONGO_URI}`);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} -> http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

startServer();
