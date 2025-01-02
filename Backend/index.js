const express=require('express');
const connect=require('./config');
const auth=require('./routes/auth');
const cors=require('cors');
require('dotenv').config();
connect();
const app=express();
app.use(express.json());
app.use(cors());


app.use('/api/auth',auth);
app.listen(5000,()=> console.log("Server is running"));