//NESSE ENUM ESTAMOS CRIANDO OS POSSÍVEIS STATUS DOS LIVROS

export enum StatusLivro {
    DISPONIVEL = 'DISPONÍVEL', //Significa que o livro está disponível para empréstimo
    EMPRESTADO = 'EMPRESTADO', // Indica que o livro foi emprestado a um usuário
    ATRASADO = 'ATRASADO', // Quando o livro não é devolvido dentro do prazo estipulado
    RESERVADO = 'RESERVADO' // Quando um usuário solicita reservar o livro, mas ainda não o pegou
}
