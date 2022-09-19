const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', async (request, response) => {
  response.render('index');
});

app.get('/immersive', async (request, response) => {
  response.render('immersive');
});


app.use(express.static('public'));


app.listen(5000, () => {
  console.log("app Running on localhost:5000")
});