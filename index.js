const express = require("express");
const server = express();
const portNum = process.env.PORT || 5000;
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

server.use(express.json());

server.get("/", async (req, res) => {
  const client = await pool.connect();
  const result = await client.query("SELECT 'Asher Kobin' AS Name");

  client.release();
  
  res.status(200).json(result);
})

server.post("/sql", async (req, res) => {
  console.log("BODY:", req.body);
  
  const client = await pool.connect();
  const result = await client.query(req.body.query);

  client.release();

  res.status(200).json(result);
});

server.listen(portNum, () => {
  console.log("Express is Running on " + portNum);
})