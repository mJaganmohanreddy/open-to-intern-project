const internModel = require("../models/internModel");
const collegeModel = require("../models/collegeModel");
const Validators = require('../validators/validators');


  const CreateIntern = async function(req, res){
    try{

        let requestBody = req.body;
      if(!Validators.isValidRequestBody(requestBody)){
     res.status(400).send({status: false, msg: "Invalid request Body ,Plzz provide intern detalis"});
      return 
      }
   if (!Validators.isValidField(requestBody.name))
  return res.status(400).send({status: false, msg: "name is required"})
   

  if (!Validators.isValidMobileNo(requestBody.mobile))
  return res.status(400).send({status: false, msg: "mobile is required"})
   

  if (!Validators.isValidEmail(requestBody.email))
  return res.status(400).send({status: false, msg: "email is required"})
     
  let emailExists = await internModel.findOne({email : requestBody.email});
 if (emailExists)
 return res.status(400).send({ status: false, message: "Email has already been registered" });


  if (!Validators.isValidField(requestBody.collegeName))
  return res.status(400).send({status: false, msg: "collegeName is required"})
    
    let college = await collegeModel.findOne({name : requestBody.collegeName});
    if (!college) 
    return res.status(400).send({ status: false, message: "College id not found!" });
    
    requestBody['collegeId'] = college._id
     let interndata = await internModel.create(requestBody);
    res.status(201).send({ status: true, message: 'New details created successfully.', data: interndata });
  }catch(error)  
  {
    res.status(500).send({ status: false, msg: error.message });
  }
};



//  GET /functionup/collegeDetails
// Returns the college details for the requested college (Expect a query parameter by the name collegeName. This is anabbreviated college name. For example iith)
// Returns the list of all interns who have applied for internship at this college.
// The response structure should look like this




const getdata = async function (req,res){
  try {
  let data = req.query.collegeName

  if(!data){
      return res.status(400).send({status:false, msg:"data not found"})
  }



  let collegedetails = await collegeModel.findOne({name:data,isDeleted :false},{name: 1, _id: 1, fullname: 1, logolink: 1})
  if (!collegedetails) 
  return res.status(404).send({ status:false, msg: 'collage name not found'});
  let interndetails = await internModel.find({ collegeId: collegedetails._id,isDeleted: false }).select({_id:1, name: 1, email:1, mobile:1});
  let alldetails = {name: collegedetails.name,fullname: collegedetails.fullname, logoLink: collegedetails.logolink, interns: interndetails};
  if ( interndetails.length ===0) 
  return res.status(404).send({status:false, alldetails,msg:"no intern applied"})

  return res.status(200).send({status:true, data:alldetails})
  
  }


  catch(err){
      return res.status(500).send({status:false,error:err.messege})
  }
}


module.exports.getdata = getdata

module.exports.CreateIntern = CreateIntern;



  
