const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongojs=require('mongojs');
const dburl="interview_info";
const collection=['emp'];
var db=mongojs(dburl,collection);
var port=4000;
 var app=express();
 app.use(bodyParser.json());
 app.use(cors());
 app.get('/display',function(req,res)
 {
    db.emp.find({},function(error,emp){
        if(error||!emp)
        {
            console.log("no data");
        }
        else{
            res.json(emp);
        }
    });
  });
app.get('/',function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<html>hello</html>');
});
 app.post('/adduser',function(req,res){
     db.emp.insert({"name":req.body.name,"email":req.body.email,"company":req.body.company,"position":req.body.position,"q1":req.body.q1,"q2":req.body.q2,"q3":req.body.q3,"q4":req.body.q4,"q5":req.body.q5,"q6":req.body.q6,"q7":req.body.q7,"q8":req.body.q8,"q9":req.body.q9,"q10":req.body.q10,"q11":req.body.q11,"q12":req.body.q12,"q13":req.body.q13,"q14":req.body.q14,"q15":req.body.q15,"remark":req.body.remark,"convert":req.body.convert});
     res.status(200).send({"msg":"success"});
 });
app.listen(port,function(req,res){
    console.log("start");
});