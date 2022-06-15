const staff=require('../staff model/staff_model');


function addstaff(req,res) {
    staff.create(req.body)
    .then(function(data) {
        res.status(200).json({
            success:true,message:'data has been created',data
        })
    }).catch((err) => {
        res.status(401).json({
            success:false,message:'data has not been created '
        })
    });
    
}
function getallstaff(req,res) {
    staff.find({})
    .then(function(data) {
        res.status(200).json({
            success:true,message:'This is all  staffs',data
        })
    }).catch((err) => {
        res.status(401).json({
            success:false,message:'data has not been created '
        })
    });
    
}
function updatestaff(req,res) {
    
}
function deletestaff(req,res) {
    
}
function getstaffbyid(req,res) {
    
}
module.exports={
    addstaff,getallstaff,updatestaff,deletestaff,getstaffbyid
}