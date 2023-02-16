const express = require("express");
const cors = require('cors')

const dados = require('./dados/data.json')

const app = express();
app.use(cors())

app.get("/links", function (request, response) {
  response.json(dados).status(200)  
});

app.listen(3003, function () {
  console.log("Server is running");
});
