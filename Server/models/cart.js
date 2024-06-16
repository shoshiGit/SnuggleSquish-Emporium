import { Schema } from "mongoose";

const cartSchema = new Schema({
    username: {type:String,},
    img:{type:String},
    amount:{type:String},
    price:{type:Number}
})
export const cartModel = mongoose.model('Cart', cartSchema)