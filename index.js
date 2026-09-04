/* =================================================================
    Importando as dependências
   =================================================================
*/

const express = require('express');


//Importando as rotas
const routes = require('./src/routes/web')

/* =================================================================
    Configurações do servidor
   =================================================================
*/
const app = express(); //Ligando o Express
const port = 3000; //Definindo a porta do servidor

//Definindo o ejs como motor template padrão
app.set('view engine', 'ejs');

//Definir a localização da pasta views
app.set('views', './src/views')

//configurando o backend para aceitar requisições de um formulario
app.use(express.urlencoded({ extended:true}))

/* =================================================================
    Rotas
   =================================================================
*/
//"Utilizando" as rotas do arquivo web.js
app.use(routes)

/* =================================================================
    Escuta as requisições HTTP
   =================================================================
*/

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})