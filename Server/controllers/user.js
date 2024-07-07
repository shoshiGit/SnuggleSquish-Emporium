import { compare } from "bcrypt";
import { userModel } from "../models/user.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../config/jwt.js";
import Joi from "joi";

const sighnupSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().min(6).regex(/^[a-zA-Z0-9]*$/).required()
});


const addUser = async (req, res) => {
    const { password, ...rest } = req.body;
    try {
        const {error}=sighnupSchema.validate(req.body);
        if(error)return res.status(400).json({ error: error.details[0].message });
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({ ...rest, password: hashedPassword });
        newUser.save();
        const token = generateToken();

        res.status(201).send({user,token});
    }
    catch (err) {
        res.status(400).json(err.message);

    }


}
const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send("Not all fields have been entered");
        }
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)return res.status(400).json({ error: 'Invalid credentials' });
        
        const token = generateToken(user);
        res.json({ ...user._doc, password: undefined, token });

    } catch (err) {
        res.status(500).send(err.message);
        
    }

}
const getAllUsers = async function (req,res) {
    try {
        const users = await userModel.find();
        console.log(users)
        res.json(users);
    } catch (err) {
        res.json(err)
    }
}

export { addUser, login, getAllUsers }
