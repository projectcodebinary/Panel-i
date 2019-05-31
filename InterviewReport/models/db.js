const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/InterviewReport',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('MongoDB connection succeed')
    }else{
        console.log('Error ' +err);
    }
});

require('./ir.model.js');