const express = require("express");
const cors = require("cors");
const app = express();
const playersRoute = require("./routes/players");
const teamsRoute = require("./routes/teams");



// Configuration
require("dotenv").config();
const port = process.env.PORT || 3333;

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json;charset=UTF-8"
  ) {
    return res.status(400).json({
      message: "POST requests must contain content-type=application/json",
    });
  } else {
    next();
  }
});

// Routes
// app.use("/players", playersRoute);
// app.use("/teams", teamsRoute);

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});