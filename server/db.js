const mongoose = require('mongoose')




module.exports = () => {
    const connectionsParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect("mongodb+srv://fasih123:nEFEDA4eBRPth87w@cluster0.5udsnyb.mongodb.net/test", connectionsParams)
        console.log("Connected to database")
    }catch(err){
        console.log(err);
    }
}