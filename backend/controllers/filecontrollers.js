const File=require('../models/FileResources');
const handleUploadFile=async(req,res)=>{
    try{
        if(!req.file) return res.status(400).json({message:"no file found"});
        // console.log(req.file);
        // console.log(req.body);
        const {id,author,title,branch,year,sem,category,description}=req.body;
        const newFile=new File({
            id:id,
            author:author,
            title:title,
            branch:branch,
            year:year,
            sem:sem,
            category:category,
            description:description,
            url:req.file.path+"?fl_attachment=false"
        });
        await newFile.save();
        res.json({message:"file uploaded successfully",url:newFile.url});
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