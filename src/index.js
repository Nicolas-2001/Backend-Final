const express = require("express");
const cors = require("cors");
const conexionBd = require("../config/db");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

app.get("/", (req, res) => {
    res.send("Conexion Exitosa");
});

//rutas
app.use("/api/usuarios", require("../routes/usuarios"));
app.use("/api/auth", require("../routes/auth"));
app.use("/api/clientes", require("../routes/rutasClientes"));
app.use("/api/productos", require("../routes/rutasProductos"));
app.use("/api/proveedor", require("../routes/rutasProveedor"));

// enlazar servidor con bd
conexionBd();
