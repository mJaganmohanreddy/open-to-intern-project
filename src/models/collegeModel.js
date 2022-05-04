const mongoose = require('mongoose');


///{ name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, 
//logoLink: {mandatory}, isDeleted: {boolean, default: false} }


const collegeSchema = new mongoose.Schema(
    { 
        name : { 
                    type: String, 
                    required: true,
                    unique: true,
                    trim: true
                }, 
        fullname : { 
                    type: String, 
                    required: true, 
                    trim: true
                }, 
    logolink : { 
                    type: String, 
                    required: true 
                }, 
    isdeleted : { 
                    type: Boolean, 
                    default:  false
    
                }
             },{ timestamps : true }
);

module.exports = mongoose.model('College', collegeSchema);