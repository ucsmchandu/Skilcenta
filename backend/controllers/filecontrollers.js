const File=require('../models/FileResources');
const handleUploadFile=async(req,res)=>{
    try{
        // console.log(req.file);
        console.log(req.body);
        const {id,author,email,title,branch,year,sem,category,description,url}=req.body;
        const newFile=new File({
            id:id,
            email:email,
            author:author,
            title:title,
            branch:branch,
            year:year,
            sem:sem,
            category:category,
            description:description,
            url:url
        });
        await newFile.save();
        res.json({message:"file uploaded successfully",url:url});
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(500).json({message:err.message});
    }
}

const handleGetFile=async(req,res)=>{
   try{
    const data=await File.find({});
    if(data.length===0)
         return res.status(400).json({message:"No data found"});
    return res.status(200).json({files:data});
   }catch(err){
    console.log(err);
    console.log(err.message);
    res.status(500).json({message:err.message});
   }
}

module.exports={
    handleGetFile,
    handleUploadFile
}