import { Router } from "express";
import { addUser, getAllUsers, login } from "../controllers/user.js";
import { authAdmin } from "../middleware/authentication.js";

const userRoute = Router();

userRoute.post('/', addUser);
userRoute.post('/login', login);
userRoute.get("/", authAdmin, getAllUsers);


export default userRoute;