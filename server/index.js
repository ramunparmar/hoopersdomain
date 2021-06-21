const express = require("express");
const cors = require("cors");
const app = express();
const express = require('express');
const NBA = require('nba');

const app = express();
const port = 3333;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/players/:playerId', (req, res, next) => {
    NBA.stats
        .playerInfo({ PlayerID: req.params.playerId })
        .then((playerInfo) => {
            res.send(JSON.stringify(playerInfo));
        })
        .catch((e) => {
            next(e);
        });
});

app.get('/players/:playerId/shots', (req, res, next) => {
    NBA.stats
        .shots({ PlayerID: req.params.playerId, Season: '2020-21' })
        .then((shots) => {
            res.send(JSON.stringify(shots));
        })
        .catch((e) => {
            next(e);
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// // Configuration
// require("dotenv").config();
// const port = process.env.PORT || 3333;

// // Middleware
// app.use(express.json());
// app.use(cors());

// app.use((req, res, next) => {
//   console.log("Incoming request");
//   next();
// });

// app.use((req, res, next) => {
//   if (
//     req.method === "POST" &&
//     req.headers["content-type"] !== "application/json;charset=UTF-8"
//   ) {
//     return res.status(400).json({
//       message: "POST requests must contain content-type=application/json",
//     });
//   } else {
//     next();
//   }
// });

// // Routes
// // app.use("/players", playersRoute);
// // app.use("/teams", teamsRoute);

// app.listen(port, () => {
//   console.log(`Server is listening on Port ${port}`);
// });