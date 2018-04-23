const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route');

const app = express(); //app = an instance of that express server
const PORT = 5000;

//this will live in the databse shortly:
const recordCollection = require('./modules/record-collection');
//must be ./folder

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//routes (get, post, put delete request):
//at this point the server is there but not doing anything, thus cannot GET.

app.use('/record/', recordRouter)

app.listen(PORT, () => {
    console.log(`up and running on ${PORT}`);
});