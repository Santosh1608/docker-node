const app = require("express")();
const cors = require("cors");

app.use(cors());
const PORT = 8001;
app.get("/", (req, res) => {
  console.log("HIT");
  res.send("HELLO FROM DOCKER");
});

app.get("/getName", (req, res) => {
  console.log("GET MY NAME");
  res.send({ name: "SANTHOSH" });
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
