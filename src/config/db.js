import { MongoClient } from 'mongodb';

const url = "mongodb+srv://quanghoang508:Kiwi123@cluster0.cokwlvl.mongodb.net/"

const client = new MongoClient(url);

const dbName = 'myProject';
const db = client.db(dbName);
export const usersCollection = db.collection('Users');
export const inventoryCollection = db.collection('Inventory');
export const orderCollection = db.collection('Order');


export const dbConnect = async () => {
    try {
        await client.connect();
        console.log('connect db successfully');
    } catch(err) {
        console.log('connect failed', err);
    }

}