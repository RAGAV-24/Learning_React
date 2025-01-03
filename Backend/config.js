const mongoose=require('mongoose');
require('dotenv').config();
console.log('Mongo URI:', process.env.MONGO_URI);

const connect=async()=>
{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error("MongoDB failed to connect:", error.message);

    process.exit(1);


  }
};
module.exports=connect;