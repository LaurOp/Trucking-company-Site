const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.static(__dirname))

app.use(session({secret:'secret'
    ,name:'uniqueSession'
    ,saveUninitialized:false}))

app.get('/',(req,res)=>
{
    if(req.session.loggedIn)
        res.redirect('/logout.ejs')
    else
        res.sendFile('login.html',{root:__dirname})
})

app.get('/logout.ejs',(req,res)=>
{
    if(req.session.loggedIn)
    {
        res.setHeader('Content-Type','text/html')
        res.write('Logat cu username '+req.session.username)
        res.write('<br>')
        res.write('<a href="index.html">Logout</a>')
        res.end()
    }
    else
        res.redirect('/login.html')
})
app.post('/'
    ,bodyParser.urlencoded()
    ,(req,res,next)=>
    {
        if(req.body.username === 'a' && req.body.password === 'a')
        {
            res.locals.username = req.body.username
            next()
        }
        else
            res.sendStatus(401)
    }
    ,(req,res)=>
    {
        req.session.loggedIn = true
        req.session.username = res.locals.username
        console.log(req.session)
        res.redirect('/logout.ejs')
    })

app.get('/logout.ejs',(req,res)=>
{
    req.session.destroy((err)=>{})
    res.send('La revedere!')
})

app.get('/nr', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("Ai vazut pagina de " + req.session.page_views + " ori");
    } else {
        req.session.page_views = 1;
        res.send("E prima oara cand vezi pagina");
    }
});

app.get('*',(req,res)=>{
    res.sendFile(__dirname + "/404.html")
})

app.listen(port,()=>{console.log(`http://localhost:3000`)});