const express= require("express");

const path = require('path')
const app = express();
const port= 80;


app.use('/static',express.static('static'))

app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))

app.get("/demo", (req, res)=>{ 
   res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});


app.get("/",(req,res)=>{
   res.send("first express app");

});

app.get("/about",(req,res)=>{
    res.send("first express app----ABOUT");
 
 });

 app.post("/about",(req,res)=>{
    res.send("first express app----ABOUT OF POST REQUEST");
 
 });


app.listen(port,()=>{
    console.log(`running on port ${port}`)
})