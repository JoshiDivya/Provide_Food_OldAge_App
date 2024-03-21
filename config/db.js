require('dotenv').config();

import mongoose from 'mongoose';
mongoose.set('strictQuery', false)


export default function connectDB() {
    mongoose.connect(  process.env.MONGO_CONNECTION_URL);
    const connection=mongoose.connection;
    try{
        connection.once('open', ()=>{
            console.log('Database Connected')
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

