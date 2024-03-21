
import express from 'express';
import connectDB from './config/db'
const app=express()
const PORT=process.env.PORT || 5500
connectDB();

const userRoute=require('./routes/userRoute')
app.use('/',userRoute.user_routes)

const adminRoute=require('./routes/adminRoute')  
app.use('/admin',adminRoute)

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`)
})