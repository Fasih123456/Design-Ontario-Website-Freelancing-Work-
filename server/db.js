const mongoose = require('mongoose')

module.exports = () => {
    const connectionsParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionsParams)
        console.log("Connected to database")
    }catch(err){
        console.log(err);
    }
}