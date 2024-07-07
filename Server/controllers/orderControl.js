import { orderModel } from "../models/order.js";

const getAllOrders = async function (req,res) {
    try {
        const orders = await orderModel.find().populate('userId').populate('products.productId');
        console.log(orders)
        res.json(orders);
    } catch (err) {
        res.json(err)
    }
}

const createNewOrder = async(req,res)=>{
try{
    const order = new orderModel(req,body);
    await order.save();
    res.status(201).json(order);
}
catch(error){
    res.status(400).json({error:error.message});
}
};
//update order statuts
const updateOrder = async(req, res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const deleteOrder=async(req,res)=>{
    try {
        const id = req.body;
        const order = await orderModel.$where('isDe')
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json({ message: 'Order deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
}
export { getAllOrders,createNewOrder ,updateOrder,deleteOrder}

// Get orders by user ID
// router.get('/orders/user/:userId', async (req, res) => {
//     try {
//         const orders = await Order.find({ userId: req.params.userId }).populate('products.productId');
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Create new order
// router.post('/orders', async (req, res) => {
//     try {
//         const order = new Order(req.body);
//         await order.save();
//         res.status(201).json(order);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Update order status
// router.put('/orders/:id', async (req, res) => {
//     try {
//         const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//         if (!order) return res.status(404).json({ error: 'Order not found' });
//         res.json(order);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Delete order
// router.delete('/orders/:id', async (req, res) => {
//     try {
//         const order = await Order.findByIdAndDelete(req.params.id);
//         if (!order) return res.status(404).json({ error: 'Order not found' });
//         res.json({ message: 'Order deleted' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
