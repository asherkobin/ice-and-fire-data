const express = require("express");
const server = express();
const portNum = process.env.PORT || 5000;

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json("Hello World");
})

server.listen(portNum, () => {
  console.log("Express is Running on " + portNum);
})