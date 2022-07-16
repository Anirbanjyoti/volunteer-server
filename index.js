const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// api declare
app.get("/", (req, res) => {
    res.send("Volunteer Server is running");
  });
//   app.get("/hero", (req, res) => {
//     res.send("Volunteer Server is Running on Herokou");
//   });
// Listening port
app.listen(port, () => {
    console.log(`Listening to port`, port);
  });
  