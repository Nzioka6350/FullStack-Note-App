import express from 'express';
const app = express();
const port = 5000;
app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/test',(req,res)=>{
    res.send('login')
})

app.listen(port,()=>{
    console.log("app is running on port",{port})
})