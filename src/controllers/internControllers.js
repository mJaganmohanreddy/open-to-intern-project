const internModel = require("../models/internModel");
const collegeModel = require("../models/collegeModel");
const Validators = require('../validators/validators');


  const CreateIntern = async function(req, res){
    try{
        let requestBody = req.body;
      if(!Validators.isValidRequestBody(requestBody)){
     res.send(400).send({status: false, msg: "Invalid request Body ,Plzz provide intern detalis"});
      return 
      }
   if (!Validators.isValidField(requestBody.name))
  return res.send(400).send({status: false, msg: "name is required"})
   

  if (!Validators.isValidField(requestBody.mobile))
  return res.send(400).send({status: false, msg: "mobile is required"})
   

  if (!Validators.isValidEmail(requestBody.email))
  return res.send(400).send({status: false, msg: "email is required"})
     

  if (!Validators.isValidField(requestBody.collegeName))
  return res.send(400).send({status: false, msg: "collegeName is required"})
    
    let college = await collegeModel.findOne({_id : requestBody.collegeId});
    if (!college) 
    return res.status(400).send({ status: false, message: "College id not found!" });
 
     let interndata = await internModel.create(requestBody);
    res.status(201).send({ status: true, message: 'New details created successfully.', data: interndata });
  } 
catch(error)  
  {
    res.status(500).send({ status: false, msg: error.message });
  }
};



module.exports.CreateIntern = CreateIntern;



  
