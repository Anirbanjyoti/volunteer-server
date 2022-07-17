const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB_USER: volunteer,
// DB_PASS:bRFLY7MLmKzUGQ4Q

// Database Connection

const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eh0djdh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(`DB Connected`);
  
  // perform actions on the collection object
  client.close();
});


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
  