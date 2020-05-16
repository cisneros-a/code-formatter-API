const express = require("express");
const cors = require("cors");
const functions = require("./index");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/codeFormatter", async (req, res) => {
  let formattedCode = await functions.formatCode(req.body.snippet);
  res.send(formattedCode);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
