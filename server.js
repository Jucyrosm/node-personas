const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const personaRoutes = require("./routes/personas");

const app = express(); // Inicializa app aquí
app.use(express.json());
app.use(cors());


app.use("/personas", personaRoutes);

mongoose.connect("mongodb://localhost:27017/personasDB")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
