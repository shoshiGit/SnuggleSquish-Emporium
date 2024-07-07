import jwt from "jsonwebtoken";
import { userModel } from "../models/user.js";

export const authUser = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Access denied. No token provided.');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "shoshi_secret_key");
        const user = await userModel.findById(decoded._id);
        if (!user) return res.status(400).send('Invalid token.');
        req.user = user;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};
export const authAdmin = async (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        console.log(req.user.role)
        next();
    } else {
        res.status(403).send('Access denied. Admin only.');
    }
};
