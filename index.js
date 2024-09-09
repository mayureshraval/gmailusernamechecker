import express from 'express';
import axios from 'axios';
import ApiKey from './apiKey.mjs';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send('App running!');
    res.render('index.ejs')
})
app.post('/', async (req, res) => {
    // res.send('App running!');
    const config = {
        headers: {
            "X-Rapidapi-Host": "gmail-username-availability-check.p.rapidapi.com",
            "x-rapidapi-key": ApiKey,
            "Content-Type": 'application/json'
        }
    }
    const url = 'https://gmail-username-availability-check.p.rapidapi.com/gusername';
    let username = req.body.username;
    try {
        let result = await axios.post(url, { username: username }, config)
        console.log(result); 
        res.render('index.ejs', { response: JSON.stringify(result.data.message), username: username });
    } catch (error) {
        console.log(error.message);
        res.render('index.ejs', { response: error.message});
    }

})

app.listen(port, () => {
    console.log('Example server running on ', port);
})