const { resolveSoa } = require("dns");
const express= require("express");
const { normalize } = require("path");
const fs= require("fs");

const path = require('path')
const app = express();
const port= 80;

//EXPRESS files
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))



// ENDPOINTS
app.get('/', (req, res)=>{
   const con = "This is the best content on the internet so far so use it wisely"
   const params = {'title': 'PubG is the best game', "content": con}
   res.status(200).render('index.pug', params);
})

app.post('/',(req,res)=>{
   // console.log(req.body);
   nname=req.body.nname;
   age=req.body.age;
   no=req.body.no;
   address=req.body.address;

   let ouptutwrite= `Name of client is ${nname} ,${age} ,${address}`;
   fs.writeFileSync('output.txt',ouptutwrite);

   const params = {'message': 'from submited'}
   res.status(200).render('index.pug', params)
})

app.listen(port,()=>{
   console.log(`running on port ${port}`)
})

/*app.get("/demo", (req, res)=>{ 
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
*/

