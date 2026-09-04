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
/**
 * Retornam todos os livros cadastrados,
 * ordenados pelo titulo em ordem crescente
 * @returns  {Promise} Lista de livros ou objeto de erro
 */
function all(){
    return db.select('*').from('books')
    .orderBy('tiltle','ASC')
    .then(books =>{ return books })
    .catch(erro => {
        return { type: "error", msg: "Erro: " + erro}
    })
} //fim do all

//Exportando a função save 
module.exports = { save, all }
