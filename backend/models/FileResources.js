const mongoose=require('mongoose');

const FileSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    sem:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }, //thi is for pdf file
},{timestamps:true});

const File=mongoose.model("File",FileSchema);
module.exports=File;