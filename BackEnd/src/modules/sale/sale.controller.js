import {Router} from "express"
import * as saleService from "./sale.service.js"
import { asyncHandler } from "../../utils/asyncHandler.js";
const router = Router();

router.get("/sales",asyncHandler(saleService.getAll));
router.get("/sales/:id",asyncHandler(saleService.getSaleById));
router.post("/sales", asyncHandler(saleService.addSale));
router.put("/sales/:id",asyncHandler(saleService.updateSale));
router.delete("/sales/:id",asyncHandler(saleService.deleteSale));


export default router