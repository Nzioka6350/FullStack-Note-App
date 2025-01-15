import express from 'express';
const app = express();
const port = 5000;
app.set('view engine','ejs');
app.use(express.static('public'))
//To get login page
app.get('/login',(req,res)=>{
    res.render('login')
})
//Route to get rester page
app.get('/register',(req,res)=>{
    res.render('register')
})
//Route to get all the notes
app.get('/notes',(req,res)=>{
    res.render('allNotes')
})
//Route to create new user
app.post('/newUser',(req,res)=>{

})
//Store new note to the database
app.post('/addedNote',(req,res)=>{

})

//Listening
app.listen(port,()=>{
    console.log("app is running on port",{port})
})