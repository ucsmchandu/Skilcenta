const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        const URL=process.env.DBURL;
        // console.log(URL);
        await mongoose.connect(URL);
        console.log("mongo db connected");
    }catch(err){
        console.log(err);
        console.log(err.message);
    }
}

module.exports=connectDB;