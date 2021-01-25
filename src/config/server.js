const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();
let port = process.env.port || 4000;

// Para funcionar o body-parser
app.use(bodyParser.json({ extended: true }));

app.use(cors());
// app.use("/api/entregas", authMiddleware);

app.listen(port, function () {
  console.log("Servidor rodando na porta: ", port);
});

// Exporta a variável para poder ser chamada em arquivos externos
module.exports = app;
