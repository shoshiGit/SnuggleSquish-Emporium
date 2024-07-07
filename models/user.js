import Joi from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, trim: true, required: true },
    username:{type:String},
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    registrationDate: { type: Date, default: Date.now, immutable: true },
    modifiedAt: { type: Date, default: Date.now },
});


userSchema.pre('save', async function (next) {
    if (this.isModified('passwod')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    this.modifiedAt = Date.now();;
    next();
})
export const userModel = mongoose.model('User', userSchema)


export const sighnupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).regex(/^[a-zA-Z0-9]*$/).required()
});