const mongoose = require('mongoose')




module.exports = () => {
    const connectionsParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect("mongodb+srv://fasih:fasih123@cluster0.5udsnyb.mongodb.net/?retryWrites=true&w=majority", connectionsParams)
        console.log("Connected to database")
    }catch(err){
        console.log(err);
    }
}