const express = require("express");
const axios = require("axios");
const responseTime = require("response-time");
const Redis = require("ioredis");

const client = new Redis();

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

const app = express();

app.use(responseTime());

app.get("/character", async (req, res, next) => {
  try {
    const character = await client.get("character");

    if (character) {
      return res.json(JSON.parse(character));
    }

    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    await client.set("character", JSON.stringify(response.data), "EX", 60);

    res.json(response.data);
  } catch (err) {
    next(err);
  }
});

app.get("/character/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id))) {
    return res.status(400).send("Invalid character ID");
  }

  try {
    const character = await client.get(`character/${id}`);

    if (character) {
      return res.json(JSON.parse(character));
    }

    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    await client.set(
      `character/${id}`,
      JSON.stringify(response.data),
      "EX",
      60
    );

    return res.json(response.data);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
