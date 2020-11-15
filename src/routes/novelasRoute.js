const express = require("express")
const router = express.Router()
const controller = require("../controllers/novelasController")

module.exports = router

router.get("/", controller.getAll)
router.get("/ValeAPenaVerDeNovo", controller.getValeAPenaVerDeNovo)
router.post("/", controller.postNovelas)
router.delete("/:id", controller.deleteNovela)

module.exports = router