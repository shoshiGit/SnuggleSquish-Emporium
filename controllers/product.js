import mongoose from "mongoose";
import { productModel } from "../models/product.js";

const getAllProducts = async (req, res) => {
    let { txt, page, perPage, from, to, description, name } = req.query;
    txt = txt || "";
    page = parseInt(page) || 1;
    perPage = parseInt(perPage) || 15;
    try {
        let searchObject = {};
        if (description) searchObject.description = new RegExp(description, "i");
        if (name) searchObject.name = new RegExp(name, "i");
        if (from && to) searchObject.price = { $gte: from, $lte: to };
        else if (from) searchObject.price = { $gte: from }
        else if (to) searchObject.price = { $lte: to }

        const products = await productModel.find(searchObject)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.json(products);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getProductById = async (req, res) => {
    try {
        let { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(404).send("Product not found")
        }
        const product = await productModel.findById(id);
        if (!product) return res.status(404).send("Product not found");
        res.status(200).json(product);
    } catch (e) {
        return res.status(400).send(e.message);
    }
}


const addProduct = async (req, res) => {

    const { name, price, description, imgUrl, manufactureDate, stock, productCode } = req.body;
    try {
        //check joi validation
        const { error } = productSchemaJ.validate(req.body);
        if (error) { return res.status(400).json({ error: error.details[0].message }); }

        let product = await productModel.findOne({ productCode });
        //check if product exists
        if (!product) {
            const newProduct = new productModel({ name, price, description, imgUrl, manufactureDate, stock,productCode });
            const savedProduct = await newProduct.save();
            return res.status(201).json(savedProduct);
        }//else increase stock
        else {
            product.stock += stock;
            const updatedProduct = await product.save();
            return res.status(200).json(updatedProduct);
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
}


const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;
        const allowedUpdates = ["name", "price", "description", "manufactureDate", "imgUrl", "stock", ];
        const isValidOperation = Object.keys(updates).every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).json({ error: "Invalid updates!" });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(productId, updates, { new: true });
        if (!updatedProduct)
            return res.status(404).send("Product not Found");
        res.status(200).json(updatedProduct);
    } catch (e) {
        res.status(400).send(e.message);
    }

}
const deleteProduct = async (req, res) => {

    try {
        const productId = req.params.id;
        const deletedProduct = await productModel.findByIdAndDelete(productId);
        if (!deletedProduct)
            return res.status(404).send("Product not Found");
        res.status(200).json(deletedProduct);
    } catch (e) {
        res.status(400).send(e.message);
    }
}
export {deleteProduct, getAllProducts, getProductById, addProduct, updateProduct };