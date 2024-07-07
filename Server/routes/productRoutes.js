import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProductById,updateProduct } from "../controllers/product.js";
import { authAdmin } from "../middleware/authentication.js";

const productRouter = Router();

productRouter.get("", getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/',authAdmin, addProduct)
productRouter.put('/:id', authAdmin, updateProduct);
productRouter.delete(':id', authAdmin, deleteProduct);

export { productRouter };