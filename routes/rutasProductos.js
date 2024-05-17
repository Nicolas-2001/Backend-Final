const express = require("express");
const router = express.Router();
const productoController = require("../controller/productoController");

router.post("/", productoController.agregarProducto);
router.get("/", productoController.obtenerProductos);
router.get("/:id", productoController.obtenerProductoPorId);
router.put("/:id", productoController.actualizarProducto);
router.delete("/:id", productoController.eliminarProducto);

module.exports = router;
