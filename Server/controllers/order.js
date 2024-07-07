import { orderModel } from "../models/order.js";

export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().populate('userId').populate('products.productId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createNewOrder = async (req, res) => {
    const { targetDate, address, products } = req.body;
    const userId = req.user._id;
    try {
        const newOrder = new orderModel({ targetDate, address, products, userId });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id);
        if (req.user.role === 'ADMIN' || order.userId.equals(req.user._id)) {
            await order.remove();
            res.status(200).json({ message: "Order deleted" });
        } else {
            res.status(403).json({ message: "Forbidden" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        if (req.user.role === 'ADMIN') {
            Object.assign(order, req.body);
            await order.save();
            res.status(200).json(order);
        } else {
            res.status(403).json({ message: "Forbidden" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
