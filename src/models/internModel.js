const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const internSchema = new mongoose.Schema(
    
  
   
//{ name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, 
//valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}
      {
        name: {
            type: "String",
            required: true,
            trim: true
        },
    
        email: {
            type: "String",
            required: true,
            unique: true,
            trim: true,
            lowercase : {require : true} 
        },
        
        mobile: {
            type: "String",
            required: true,
            unique: true
        },
   collegeId : {
     type : objectId,
     ref: "College"
   },

   isDeleted: {
      type: Boolean,
      default : false
   },



         
    },{ timestamps: true }
);

module.exports = mongoose.model("INTERN",internSchema);
