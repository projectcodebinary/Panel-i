const express=require('express');
var router =express.Router();
const mongoose=require('mongoose');
const IR=mongoose.model('IR');


router.get('/',(req,res)=>{
    res.render("form/add");
});

router.post('/',(req,res)=>{
    insertrecord(req,res);
})

router.get('/list',(req,res)=>{
    IR.find((err,docs)=>{
        if(!err){
            res.render("form/list",{
                list:docs
            });
        }else{
            console.log('Error '+err);
        }
    });
});

function insertrecord(req,res){
    var ir=new IR();
    ir.name=req.body.name;
    ir.email=req.body.email;
    ir.companyname=req.body.companyname;
    ir.position=req.body.position;
    ir.question1=req.body.question1;
    ir.question2=req.body.question2;
    ir.question3=req.body.question3;
    ir.question4=req.body.question4;
    ir.question5=req.body.question5;
    ir.question6=req.body.question6;
    ir.question7=req.body.question7;
    ir.question8=req.body.question8;
    ir.question9=req.body.question9;
    ir.question10=req.body.question10;
    ir.question11=req.body.question11;
    ir.question12=req.body.question12;
    ir.question13=req.body.question13;
    ir.question14=req.body.question14;
    ir.question15=req.body.question15;
    ir.remarks=req.body.remarks;
    ir.convert=req.body.convert;
    
    ir.save((err,doc)=>{
        if(!err){
            res.redirect('ir');
        }else{
            console.log("Error "+err);
        }
    });
}



module.exports=router;