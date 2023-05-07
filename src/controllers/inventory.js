import asyncHandler from 'express-async-handler';
import { inventoryCollection } from '../config/db.js';

export const getProducts = asyncHandler( async (req, res) => {
    const data = await inventoryCollection.find().toArray()
    res.status(200).json({
        Message: "read data success",
        data
      });
})

export const GetSmallQuantityProducts = asyncHandler(async(req,res) => {
    
        const inventories = await inventoryCollection.find({ instock: { $lt: 100 } }).toArray();
        res.status(200).json({
            message: "Success",
            data: inventories,
        })
})