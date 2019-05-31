require('./models/db');

const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const bodyparse=require('body-parser');


const irController=require('./controllers/irController');

var app=express();
app.use(bodyparse.urlencoded({
    extended:true
}));

app.use(bodyparse.json());

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+ '/views/layouts/'}));
app.set('view engine','hbs');

app.listen(3000,()=>{
    console.log("Server is started");
})


app.use('/ir',irController);