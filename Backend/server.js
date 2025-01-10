import express from 'express';
const app = express();
const port = 5000;
app.set('view engine','ejs');


app.get('/test',(req,res)=>{
    res.send("Yoh I'm just kidding")
})

app.listen(port,()=>{
    console.log("app is running on port",{port})
})