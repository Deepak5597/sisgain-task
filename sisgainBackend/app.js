const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

app.use('/api/test',(req,res)=>{
    res.send("API's are accessible.")
});

const docRoute = require('./routes/dotors.route');
app.use('/api/doctors', docRoute);

//configuring app
const appConfig = require('./config/app.config')
app.listen(appConfig.appParams.port ,(err)=>{
    if(err){
        console.log('Error occured while initialiaing applicaiton');
    }else{
        console.log(`Application is initialized on port ${appConfig.appParams.port}`);
    }
});


//configuring mongodb
const dbConfig = require('./config/db.config');
mongoose.connect(dbConfig.dbParams.dbConnectionString,{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection.on('connected',()=>{
    console.log(`App is successfully connected to database on port ${dbConfig.dbParams.dbPort}`)
});

mongoose.connection.on('error',()=>{
    console.log('Something went wrong while connecting to database.')
});


