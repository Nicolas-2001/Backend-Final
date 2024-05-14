const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ mensaje: "Prueba Unitaria" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://192.168.20.26:${PORT}`);
  console.log("Para finalizar el servidor presione Ctrl + C");
});
