import { Router} from "express";
import compraController from "./compra.controller";

const router = Router()

router.post("/addCarrinho", compraController.addCarrinho)
router.post("/realizarCompra", compraController.realizarCompra)

export default router