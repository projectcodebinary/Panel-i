const mongoose=require('mongoose');

var irSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    companyname:{
        type:String
    },
    position:{
        type:String
    },
    question1:{type:Number},
    question2:{type:Number},
    question3:{type:Number},
    question4:{type:Number},
    question5:{type:Number},
    question6:{type:Number},
    question7:{type:Number},
    question8:{type:Number},
    question9:{type:Number},
    question10:{type:Number},
    question11:{type:Number},
    question11:{type:Number},
    question12:{type:Number},
    question13:{type:Number},
    question14:{type:Number},
    question15:{type:Number},
    remarks:{type:String},
    convert:{type:String}
});

mongoose.model('IR',irSchema);