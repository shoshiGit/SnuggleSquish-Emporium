import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    targetDate: { type: Date, required: true },
    address: {
        street: { type: String, required: true },
        houseNumber: { type: String, required: true },
        city: { type: String, required: true }
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    isDelivered: { type: Boolean, default: false },
    modifiedAt: { type: Date, default: Date.now }
});


orderSchema.pre('save', function (next) {
    this.modifiedAt = new Date();
    next();
});


export const orderModel = mongoose.model('Order', orderSchema)