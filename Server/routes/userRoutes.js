import { Router } from "express";
import { addUser, getAllUsers, login } from "../controllers/userControl.js";
import { authAdmin, authUser } from "../middleware/auth.js";

const userRoute = Router();;

userRoute.post('/',addUser);
userRoute.post('/login', login);
userRoute.get("/", getAllUsers);


export default userRoute;