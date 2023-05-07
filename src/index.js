import express from 'express';
import { dbConnect } from './config/db.js';
import route from './routes/index.js';

const app = express();

app.use(express.json())
dbConnect();

route(app)

    
app.listen(3000, () => {
    console.log('app run on port 3000');
})