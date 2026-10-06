import express from "express";
import * as controller from "../controller/amostraController.js";

const router = express.Router();

router.post("/", controller.cadastrarAmostra2);
router.get("/", controller.listarAmstras);
router.patch("/:indice",controller.atualizarAmostra);
router.delete("/:indice", controller.excluirAmostra);
router.get("/:indice", controller.buscarAmostra);

export default router;