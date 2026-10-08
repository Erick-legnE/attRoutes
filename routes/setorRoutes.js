import express from "express";
import * as controller from "../controller/setorController.js";

const router = express.Router();

router.post("/", controller.cadastrar);
router.get("/", controller.listar);
router.patch("/:indice",controller.atualizar);
router.delete("/:indice", controller.excluir);
router.get("/:indice", controller.buscar);

export default router;