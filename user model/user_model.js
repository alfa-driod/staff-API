const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
firstName:{
    type:String,

},
SecondName:{
    type:String,

},
isRegistered:{
    type:Boolean,

},
userNumber:{
    type:Number

},
});
const user=mongoose.model('user',userSchema)
module.exports=user;