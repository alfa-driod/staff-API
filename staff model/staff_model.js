const mongoose= require('mongoose');

const staffSchema=mongoose.Schema({
firstName:{
   type:String,

},
SecondName:{
    type:String,

},
isAdmitted:{
    type:Boolean,

},
salary:{
    type:Number

},

});
const staff=mongoose.model('staff',staffSchema)
module.exports=staff;
