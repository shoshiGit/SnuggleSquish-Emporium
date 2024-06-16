import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true,min:0 },
    description: { type: String ,required:true},
    manufactureDate: { type: Date, required: true, default: new Date() - 1 },
    createdAt: { type: Date, default: Date().now, immutable: true },
    lastModified: { type: Date, default: new Date() },
    imgUrl: {
        type: String,
        valdate: {
            validator: function (url) {
                return /^(ftp|http):\/\/[^\s]+$/.test(url);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    stock: { type: Number, default: 0 ,min:0},
    inCart: { type: Boolean, default: false },
    qty:{type:Number,default:0}
});

productSchema.pre('save', function (next) {
    this.lastModified = new Date();
    next();
});

export const productModel = mongoose.model('Product', productSchema);