const express = require('express');
const router = express.Router(); //Router is a class or a contructor, unsure which
// this is instead of app
const recordCollection = require('../modules/record-collection'); //two dots up a level
// router.get('/record', (req, res) => { //this would be looking for /record/record.  
    router.get('/', (req, res) => { //req, res is a function
    res.send(recordCollection);
    console.log(recordCollection);
});

router.post('/', (req, res) => {
    console.log(req.body);
    recordCollection.push(req.body);  //.push adds to an array
res.sendStatus(201);
});

module.exports = router;