import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    // res.send('App running!');
    res.render('index.ejs')
})
app.post('/', (req,res)=>{
    // res.send('App running!');

    let username = req.body.username;
    res.render('index.ejs', {username: username});
})

app.listen(port, ()=>{
    console.log('Example server running on ', port); 
})