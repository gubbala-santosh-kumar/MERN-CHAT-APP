const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");
const colors = require("colors");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is Running");
  res.send(chats);
  console.log(chats);
  console.log(req.params.id);
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  res.send(req);
  console.log(req.params.id);
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
