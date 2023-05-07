import express from 'express';
import { dbConnect, UserColection } from './config/db.js';

const app = express();
dbConnect();

app.get('/', async (req, res) => {
    const data = await UserColection.find({}).toArray();
    res.json({
        data
    })
})

app.post('/', async (req, res) => {
    const user = await UserColection.insertOne({
        name: "Minh Quang"
    })
    
})
app.listen(3000, () => {
    console.log('app run on port 3000');
})