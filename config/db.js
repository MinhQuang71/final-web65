import { MongoClient } from 'mongodb';

const url = "mongodb+srv://quanghoang508:Kiwi123@cluster0.cokwlvl.mongodb.net/"

const client = new MongoClient(url);

const dbName = 'myProject';
const db = client.db(dbName);
export const UserColection = db.collection('User');

export const dbConnect = async () => {
    try {
        await client.connect();
        console.log('connect db successfully');
    } catch(err) {
        console.log('connect failed', err);
    }

}