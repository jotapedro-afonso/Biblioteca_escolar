//conexão com o banco de dados
const db = require('../config/db')

/**
 * Insere um livro na tabela "books".
 * 
 * @param {object} book - Dados do livro a ser inserido. 
 * o livro deve conter: Título, autor e sinopse
 * @returns {Promise<object>} -Resultado da operação:
 * sucess em caso de inserção ou error em caso de falhas
 */
function save(book) {
    return db.insert(book).into('books')
    .then( _ => {
        return {
            tipo: "sucesso",
            corpo: "Dados inseridos com sucesso"
        }
    })   
.catch(erro => {
    return {
        tipo: "error", msg: "Erro: " + erro}
    })
}//fim do salvar

//Exportando a função save 
module.exports = { save }
