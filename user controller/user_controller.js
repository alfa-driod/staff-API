const user= require('../user model/user_model');
function adduser(req,res) {
    user.create(req.body)
    .then(function (data) {
        res.status(200).json({success:true,message:'successfully added',data})
        
    })
    .catch(function (err) {
        res.status(401).json({success:false,message:'couldnt add try again'})
    })
    
}
function getalluser(req,res) {
    user.find({})
    .then(function(data) {
        res.status(200).json({
            success:true,message:'This is all  users',data
        })
    }).catch(function(data){
        res.status(401).json({
            success:false,message:'data has not been created '
        })
    });
}
function updateuser(req,res) {
    
}
function deleteuser(req,res) {
    
}
function getuserbyid(req,res){

}
module.exports={
    adduser,getalluser,updateuser,deleteuser,getuserbyid
}