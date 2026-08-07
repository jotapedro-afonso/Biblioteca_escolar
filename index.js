const express = require('express');
const app = express();
const port = 3000;

//Definindo o ejs como motor template padrão
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home')
});

app.get('/books/new', (req, res) => {
    res.render('pages/book_form')
});


app.listen(port, () => {
    console.log(`Example app listening on port:${port}`);
})