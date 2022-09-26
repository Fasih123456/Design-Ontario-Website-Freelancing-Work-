const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/contacts", async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
})

router.post('/contacts', async (req,res)=> {
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


module.exports = router;




