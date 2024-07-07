import Joi from "joi";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productCode: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    manufactureDate: { type: Date, required: true, default: Date.now },
    imgUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, immutable: true },
    lastModified: { type: Date, default: Date.now },
    stock: { type: Number, default: 0, min: 0 },
    qty: { type: Number, default: 0 }
});


productSchema.pre('save', function (next) {
    this.lastModified = new Date();
    next();
});

export const productModel = mongoose.model('Product', productSchema);


export const productSchemaJ = Joi.object({
    productCode:Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required().min(0),
    manufactureDate: Joi.date().required(),
    imgUrl: Joi.string().uri().required(),
    stock: Joi.number().default(1).min(0)
});
