const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let items = [];

// Create
app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).send(item);
});
