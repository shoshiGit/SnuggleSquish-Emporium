import { Router } from "express";
import {AddNewProduct, deleteProduct, getAllProducts, getProductById, updateProduct} from "../controllers/productControl.js";
import { authAdmin } from "../middleware/auth.js";

const productRouter = Router();

productRouter.get('/:id',authAdmin,getProductById);//add middleware isAdmin
productRouter.get("/",getAllProducts);
// productRouter.get("/",getProductByNameAndDescription);
productRouter.post("/", authAdmin,AddNewProduct);//add middleware isAdmin
productRouter.delete("/:id",authAdmin,deleteProduct);//add middleware isAdmin
productRouter.put("/:id",authAdmin,updateProduct);//add middleware isAdmin

export {productRouter};