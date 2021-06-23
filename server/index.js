const express = require("express");
const cors = require("cors");
const app = express();
// const NBA = require('nba');



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
app.use("/players", require("./routes/players"));
app.use("/teams", require("./routes/teams"));
app.use("/leaders", require("./routes/leaders"));

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});