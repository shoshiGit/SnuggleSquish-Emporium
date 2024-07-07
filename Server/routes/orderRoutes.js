import { Router } from "express";
import { createNewOrder, deleteOrder, getAllOrders, updateOrder } from "../controllers/order.js";
import { authAdmin, authUser } from "../middleware/authentication.js";


const orderRouter = Router();


orderRouter.get("/",authAdmin, getAllOrders)
// orderRouter.get("/", getAllOrders);
//orderRouter.post("/",authUser,addOrder);
orderRouter.post("/", authUser,createNewOrder);
//orderRouter.delete("/:id",authUser,deleteOrder)
orderRouter.delete("/:id",authUser,deleteOrder)

//orderRouter.get("/getByCustomerCode",authUser,getAllOrdersByCustomerCode);
//orderRouter.put("/:id",authAdmin,isShipped);
orderRouter.put("/:id",authAdmin,updateOrder)


export default orderRouter;
