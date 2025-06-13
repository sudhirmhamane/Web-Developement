import express from "express";

const app = express();
app.use(express.json());

let cricketData = [];
let nextId = 1;

// to post the data
app.post("/cric", (req, res) => {
  const { name, type } = req.body;
  const newCric = { id: nextId++, name, type };
  cricketData.push(newCric);
  res.status(201).send(newCric);
});

// to get or fetch the data
app.get("/cric", (req, res) => {
  res.status(200).send(cricketData);
});

// to get the individual data
app.get("/cric/:id", (req, res) => {
  const player = cricketData.find((p) => p.id === parseInt(req.params));
  if (!player) {
    return res.status(404).send("player not found");
  } else {
    return res.status(201).send(player);
  }
});

// to update the data
app.put("/cric/:id", (req, res) => {
  const playerId = cricketData.find((p) => p.id === parseInt(req.params.id));

  if (!playerId) {
    return res.status(404).send("PlayerId not found");
  }

  const { name, type } = req.body;
  playerId.name = name;
  playerId.type = type;
  res.send(200).send(playerId);
});

app.delete("/cric/:id", (req, res) => {
  const index = cricketData.findIndex((p) => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send("player not found");
  }

  cricketData.splice(index, 1);
  return res.status(200).send("deleted");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is Runnig at Port: ${port}`);
});
