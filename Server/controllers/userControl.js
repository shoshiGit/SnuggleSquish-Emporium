import { compare } from "bcrypt";
import { userModel } from "../models/user.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../config/generateToken.js";

const addUser = async (req, res) => {
    const { password, ...rest } = req.body;
    try {
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({ ...rest, password: hashedPassword });

        
        const user = await newUser.save();
        res.send(user);
    }
    catch (err) {
        res.send(err.message);

    }


}
const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send("Not all fields have been entered");
        }
        const user = await userModel.findOne({ email });
        if (!user || !await compare(password, user.password)) {
            return res.status(404).json({ type: "cannot login", massege: "There is no such user in the system" })
        }
        let token = generateToken(user);
        res.json({ ...user._doc, password: undefined, token });

    } catch (err) {
        res.status(500).send(err.message);
        
    }

}
const getAllUsers = async function (req, res) {
    res.status(401).send();
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (err) {
        res.send(err)
    }
}

export { addUser, login, getAllUsers }
