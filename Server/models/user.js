import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Email is not valid'],
        require: [true, 'Email is required'],

    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        // match: [/^[0-9a-zA-Z]{6,8}$/, 'Password must contain only alphanumeric characters']
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    createdAt: { type: Date, default: new Date(), immutable: true },
    modifiedAt: { type: Date, default: new Date() },
    // cart: {

},
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'modifiedAt' }
    });



userSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
})
export const userModel = mongoose.model('User', userSchema)