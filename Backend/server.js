import express from 'express';
const app = express();
const port = 5000;
app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/login',(req,res)=>{
    res.send('login')
})
app.get('/register',(req,res)=>{
    res.send('register')
})
app.get('/notes',(req,res)=>{
    res.render('allNotes')
})

app.listen(port,()=>{
    console.log("app is running on port",{port})
})