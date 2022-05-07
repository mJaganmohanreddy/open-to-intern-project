const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ShikhaSharma:qkAxOeVOss6q79IG@cluster0.j2rsl.mongodb.net/ShikhaProject2?authSource=admin&replicaSet=atlas-m4aw9f-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
{
    //mongodb+srv://jaganreddy-functionup:ORj2ygJHT7jbS3y8@cluster0.nduth.mongodb.net/jaganreddy-24?retryWrites=true&w=majority
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );

app.use(
    function (req,res,next)
    {
        const date = new Date();
        let currDateAndTime = date.toString();
        console.log(currDateAndTime,',',req.ip,',',req.method,',',req.path);
        next();
    }
);

app.use('/',route);

app.listen(process.env.PORT || 3000, (err)=> {
    console.log("Connected to PORT 3000")
});