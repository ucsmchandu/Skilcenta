require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose')
const connectDB=require('./db')
const cors=require('cors');
// const route=require('')

connectDB();
const app=express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());
// app.use('/skilcenta/api/v1',route);
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("server starts at 3000 port");
})