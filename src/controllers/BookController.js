
//Importando o modelo livro
const Book = require('../models/Book')

async function store(req, res) {
// Receber os dados
    const tiltle = req.body.title
    const author = req.body.author
    const resume = req.body.resume
    
//solicitar a inserção no bd
const msg= await Book.save({tiltle, author, resume})

//Enviar a resposta para o cliente
return res.send(msg)

}

async function index(req, res){
    //Realizar a consulta no bando de dados
       const books = await Book.all()

    //Enviar os dados para tela
    res.render('pages/home',{books})
}

module.exports = { store, index }