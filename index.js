const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB_USER: volunteer, events
// DB_PASS:bRFLY7MLmKzUGQ4Q, eQPDbUel8k68teuL

// Database connection
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eh0djdh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//
async function run() {
  try {
    await client.connect();
    const eventsCollection = client.db("eventsDB").collection("events");

    //  create API to get Multiple data
    app.get("/events", async (req, res) => {
      const query = {};
      const cursor = eventsCollection.find(query);
      const events = await cursor.toArray();
      res.send(events);
    });
    console.log(`Db Connected`);
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
// api declare
app.get("/", (req, res) => {
  res.send("Running Genius Car Server");
});
// app.get("/hero", (req, res) => {
//   res.send("Genius Car Server is Running on Herokou");
// });

// Listening port
app.listen(port, () => {
  console.log(`Listening to port`, port);
});
