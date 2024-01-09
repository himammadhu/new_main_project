const express = require('express') 
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000;
const mongoDB =require("./config/DB");
const mongoose = require('mongoose');


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//models

const districtSchema =new mongoose.Schema({
  district:{
    type:String,
  }
});
const District = mongoose.model("district",districtSchema);

const placeSchema =new mongoose.Schema({
  place:{
    type:String
  }
});
const Place = mongoose.model("place",placeSchema);

//routes
app.post("/District",async(req,res)=>{
  const{district}= req.body;
  try{
    const districtData = new District({
      district,
    });
    await districtData.save();

    res.json({message:"District inserted succesfully"});

  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

app.get("/District",async(req,res)=>{

  try{
    let districtlist= await District.find();

    res.json({districtlist});

  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server error");
  }
})
app.delete("/District/:Id",async(req,res)=>{

  try{
    const Id = req.params.Id;
    const deleteDistrict=await District.findByIdAndDelete(Id)
  

    res.json({message:"hi"});

  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

app.post("/Place",async(req,res)=>{
  const{district}= req.body;
  try{
    const districtData = new District({
      place,
    });
    await districtData.save();

    res.json({message:"Place inserted succesfully"});

  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Server error");
  }
})


app.listen(PORT, () => {
  mongoDB().then(()=>{
    console.log("Server is Running");
  })
    
  });

  app.get("/Test", (req, res) => {
    res.send({
      message: "Hai",
    
    });
  
  });
  app.get("/Test1",(req,res)=>{
    res.send({
      message:"Welcome"
    });
  });
  