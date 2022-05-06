const collegeModel = require("../models/collegeModel");
const Validators = require('../validators/validators');
//const jwt = require('jsonwebtoken');

const createCollege = async function(req,res) {
  try{

    let requestBody=req.body;
   
    if (!Validators.isValidRequestBody(requestBody))
        
        return res.status(400).send({ status: false, message: 'Invalid request body. Please provide college details.' })

    if (!Validators.isValidField(requestBody.name))
        
        return res.status(400).send({ status: false, message: ' name is required.' });

    if (!Validators.isValidField(requestBody.fullname))
        
        return res.status(400).send({ status: false, message: 'full name is required.' });

    if (!Validators.isValidField(requestBody.logolink))
        
        return res.status(400).send({ status: false, message: 'logolink is required.' });
   
        let data = req.body;
        let created = await collegeModel.create(data);
        res.status(201).send({status: true, data: created});
    }

    catch(error) 
    {
      res.status(500).send({ status: false, msg: error.message });
    }
};


 


module.exports.createCollege = createCollege