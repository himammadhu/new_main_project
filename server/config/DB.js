const mongoose = require("mongoose")
const config = require('config')
const db = config.get('mongooseURL')

const connectDB = async ()=>{
    try{
        await mongoose.connect(db);
        console.log("db connection established");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);

    }
}

module.exports = connectDB;