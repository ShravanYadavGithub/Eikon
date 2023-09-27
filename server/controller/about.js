const fs = require("fs");
const model= require('../Models/about')
const mongoose =require('mongoose')
const About=model.about;
// const index=fs.readFileSync('index.js' ,'utf-8');
// const data=JSON.parse(fs.readFileSync('dataone.json'));
// const Abouts=data.Abouts;

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 


  exports.createAbout = async (req, res) => {
    try {
      // Check if the About with the same name already exists
      const existingAbout = await About.findOne({ id: req.body});
  
      if (existingAbout) {
        return res.status(409).json({ error: 'About with the same name already exists' });
      }
  
      const about = new About(req.body);
      const savedAbout = await about.save();
      res.status(201).json(savedAbout);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create About' });
    }
  };

  exports.getAllAbouts=async(req,res)=>{
    const abouts= await About.find();
    res.json(abouts)
  }
  
  exports.getAbout=async(req,res)=>{
    const id= req.params.id;
    const about= await About.findById(id);
  res.json(about);
  }
  exports.replaceAbout=async(req,res)=>{
    const id= req.params.id;
    const doc= await About.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateAbout=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await About.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteAbout=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await About.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  