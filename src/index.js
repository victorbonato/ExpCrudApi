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

// Read
app.get("/items", (req, res) => {
  res.status(200).send(items);
});

// Update
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item, index) => (index === id ? updatedItem : item));
  res.status(200).send(updatedItem);
});

// Delete
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((items, index) => index !== id);
  res.status(204).send();
});
