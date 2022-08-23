require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors")
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');

const Contact = require("./models/contact");




connection()



app.use(express.json())
app.use(cors())

app.post('/api/contact', async (req,res)=> {
    console.log(req.body)
    try{
        const contact =     await Contact.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

        res.send(contact)
    }catch(err){
        console.log(err)
    }
})


app.get('/api', (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://fasih123:nEFEDA4eBRPth87w@cluster0.5udsnyb.mongodb.net/test";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      dbo.collection("contact-data").find().toArray(function(err, result) {
        if (err) throw err;
        res.send(result)
        db.close();
      });
    });
})



app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`))