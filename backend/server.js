const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");  



connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Printora Backend Running 🚀");
});
// app.get("/api/profile", protect, (req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to your profile",
//     user: req.user,
//   });
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});