import express from "express";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { usersCollection } from '../config/db.js';

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Username or password is missing"
        })
    }
    const user = await usersCollection.findOne({ username });
    console.log(user)

})