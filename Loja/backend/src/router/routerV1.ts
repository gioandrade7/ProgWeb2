import { Router } from "express";
import produtoRouter from "../resources/produto/produto.router";
import exercicioRouter from "../resources/exercicio/exercicio.router"

const router = Router();

router.use("/produto", produtoRouter);
router.use("/exercicio", exercicioRouter);

export default router;
