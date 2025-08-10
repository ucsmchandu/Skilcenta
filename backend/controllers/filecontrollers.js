const File=require('../models/FileResources');
const handleUploadFile=async(req,res)=>{
    try{
        // console.log(req.file);
        console.log(req.body);
        const {id,author,title,branch,year,sem,category,description,url}=req.body;
        const newFile=new File({
            id:id,
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

const handleGetFile=(req,res)=>{
    res.send("file retrived");
}

module.exports={
    handleGetFile,
    handleUploadFile
}