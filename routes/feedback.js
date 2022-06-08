const express = require('express');
const router = express.Router();
const Aerem = require('../models/Aerem');

// ROUTE 1: Get all the notes using GET "/api/notes/fetchallnotes" Login required
router.get('/fetchallfeedback', async (req, res)=>{
    try {
        const feedback = await Aerem.find();
        res.json(feedback)    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a New Note using POST "/api/notes/addnote" Login required
router.post('/aeremfeedback', async (req, res)=>{

    try {
    
    const{name,email,phone, message} = req.body;
    // if there are error return bad request and error

    const feedback = new Aerem({
        name,email,phone, message
    })

    const saveFeedback = await feedback.save()

    res.json(saveFeedback) 
        
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})


module.exports = router