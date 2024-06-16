
import { productModel } from "../models/product.js"
//$gte. $gte selects the documents where the value of the specified field is greater than or equal to (i.e. >= ) a specified value (e.g. value .) 


const getAllProducts = async (req, res) => {
    let { search, name, description, maxPrice, minPrice,startDate,endDate,sortBy,limit } = req.query;
    let perPage = parseInt(req.query.perPage) || 3;
    let page = parseInt(req.query.page) || 1;
    //let ex = /ava{1,6}$// 'i' for case-insensitive search
    let ex1 = new RegExp(`${search}`, 'i');//המחרוזת תיהיה חייבת להסתיים ב

    try {
        console.log(name)
        let filter = {};
        if (search) filter.name = ex1;

        //build a filter based on query parameters
        if (name) filter.name = new RegExp(name, 'i');;
        if (description) filter.description = new RegExp(description, 'i');
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }
        if (startDate || endDate) {
            filter.manufactureDate = {};
            if (startDate) filter.manufactureDate.$gte = new Date(startDate);
            if (endDate) filter.manufactureDate.$lte = new Date(endDate);
        }

        //sorting logic
        let sortOption = {};
        if (sortBy) sortOption[sortBy] = 1;// 1 for ascending, -1 for descending

        //query product with filtering and pagination
        const products = await productModel.find(filter)
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        //count total products matching the filter
        const totalProducts = await productModel.countDocuments(filter);

        //returns the products and the pagination information
        res.status(200).json({
            products,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page
        });
    }
    catch (e) { return res.status(500).send(e.message); }
}



const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        console.log(productId);
        const product = await productModel.findById(productId);
        if (!product) return res.status(404).send("Product not found");
        res.status(200).json(product);
    } catch (e) { return res.status(400).send(e.message); }
}

const AddNewProduct = async (req, res) => {
    //get the product details from the request body
    const { name, price, description, imgUrl, manufactureDate, stock, updateType } = req.query;
    try {
        let product = await productModel.findOne({ name });
        if (product) {
            if (updateType === 'updateDetails') {
                // Update the entire product details
                product.price = price;
                product.description = description;
                product.imgUrl = imgUrl;
                product.manufactureDate = manufactureDate;
                product.stock += stock;
            } else if (updateType === 'updateStock') {
                // Only update the stock number
                product.stock += stock;
            } else {
                return res.status(400).send("Product already exists. Specify 'updateDetails' or 'updateStock'.");
            }

            const updatedProduct = await product.save();
            return res.status(200).json(updatedProduct);
        } else {
            const newProduct = new productModel({ name, price, description, imgUrl, manufactureDate, stock });
            const savedProduct = await newProduct.save();
            return res.status(201).json(savedProduct);
        }
    }
    catch (e) {
        console.log("ISSUE", e);
        return res.status(400).send(e.message);
    }
};


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
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await productModel.findByIdAndUpdate(productId,req.body,{new:true});
        if (!updatedProduct)
            return res.status(404).send("Product not Found");
        res.status(200).json(updatedProduct);
    } catch (e) {
        res.status(400).send(e.message);
    }
}
// const getProductByNameAndDescription = async (req, res) => {
//     try {
//         const { name, description, page = 1, limit = 10 } = req.query;
//         if (!name || !description) {
//             return res.status(400).send("Both name and description are required in the query.");
//         }
//         const product = await productModel.findOne({ name, price })
//         if (!product) {
//             return res.status(404).send("Product not found");
//         }
//         res.status(200).json(product);
//     }
//     catch (e) { return res.status(500).send(e.message); }
// }

export { getProductById, AddNewProduct, updateProduct, deleteProduct, getAllProducts, };