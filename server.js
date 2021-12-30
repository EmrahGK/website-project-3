const express = require("express");
const app = express();

app.use(express.static(__dirname + "/src"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/data/:pass", (req, res) => {
  console.log("a");
  if(process.env.PASSWD != req.params.pass) return res.sendStatus(403);
  res.sendFile(__dirname + "/db/data.json");
});

app.listen(process.env.PORT);
console.log("Listening");