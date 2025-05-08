import express from "express"
import { addProduct, getProducts, deleteProdudct } from "../controllers/productControllers.js"

const router = express.Router()

router.post("/add_product", addProduct)
router.get("/get_all_products", getProducts)
router.delete("/delete_product", deleteProdudct)

export default router