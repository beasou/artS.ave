const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  return response.json(data);
});

app.get("/links/:id", function (request, response) {
  console.log(data)
  const { id } = request.params;
  const link = data.articles.find((link) => link.id == id);
  if (!link) return response.status(204).json();
  response.json(link);
});

app.post("/links", function (request, response) {
  const { URL, titulo } = request.body;

 // data.push({URL, titulo})

  response.json({ URL, titulo });
});

app.put("/links/:id", function (request, response) {
  const { id } = request.params;

  const link = data.articles.find((link) => link.id == id);
  if (!link) return response.status(204).json();
  const { URL, titulo } = request.body;
  link.URL = URL;
  link.titulo = titulo;
  response.json(link);
  
}); 

app.delete("/links/:id", function (request, response) {
    const { id } = request.params;
    const linksFiltered = data.articles.filter(link => link.id != id);
    response.json(linksFiltered);
});


//==========================================

//-------------------------------------------------


app.listen(3003, function () {
  console.log("Server is running");
});
