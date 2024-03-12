"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const StatusLivro_1 = require("../ENUMS/StatusLivro");
const GeneroLivro_1 = require("../ENUMS/GeneroLivro");
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
    }
    addUsuarios(user) {
        this.usuarios.push(user);
    }
    consultarUsuarios() {
        console.log(this.usuarios);
    }
    addDisponiveis(livroTal) {
        this.livros.push(livroTal);
    }
    consultaDisponiveis() {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL);
    }
    livrosEmprestados() {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro_1.StatusLivro.EMPRESTADO);
    }
    livrosAtrasados() {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro_1.StatusLivro.ATRASADO);
    }
    livrosReservado() {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro_1.StatusLivro.RESERVADO);
    }
    emprestarLivro(livro, usuario) {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);
        console.log('aqui é o livro' + livroEncontrado.nomeLivro);
        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL && userNome) {
            livroEncontrado.statusLivro = StatusLivro_1.StatusLivro.EMPRESTADO;
            userNome.historicoEmprestimo.push(livroEncontrado);
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi emprestado para o usuário "${usuario}".`);
            return true;
        }
        return false;
    }
    historicoEmprestimo(idUser) {
        const historico = this.usuarios.find(u => u.historicoEmprestimo.length > 0);
        let historicoIdUser = historico.historicoEmprestimo;
        if (historicoIdUser.length === 0) {
            console.log(`O usuário ${historico.nomeUsuario} não possui histórico de empréstimos.`);
            return false;
        }
        else {
            console.log(`Histórico de empréstimo do ${historico.nomeUsuario}\n`);
            historicoIdUser.forEach((livro, index) => {
                console.log(`Empréstimo ${index + 1}:`);
                console.log(`Título do livro: ${livro.nomeLivro}`);
                console.log(`Status do livro: ${livro.statusLivro}`);
                console.log(`Autor do livro: ${livro.autor}`);
                console.log("\n");
                return true;
            });
        }
    }
    devolucao(livro, usuario) {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);
        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.EMPRESTADO ||
            livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.ATRASADO ||
            livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.RESERVADO) {
            livroEncontrado.statusLivro = StatusLivro_1.StatusLivro.DISPONIVEL;
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi DEVOLVIDO para o usuário "${usuario}".`);
            return true;
        }
        return false;
    }
    reservar(livro, usuario) {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);
        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL) {
            livroEncontrado.statusLivro = StatusLivro_1.StatusLivro.RESERVADO;
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi reservado para o usuário "${usuario}".`);
            return true;
        }
        return false;
    }
    addLivroAtrasado(livro, usuario) {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);
        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.EMPRESTADO) {
            livroEncontrado.statusLivro = StatusLivro_1.StatusLivro.ATRASADO;
            console.log(`O livro "${livroEncontrado.nomeLivro}" está atrasado para o usuário "${usuario}".`);
            return true;
        }
        return false;
    }
    multa(diasTrasados) {
        const valorMulta = 10;
        let valorTotal = diasTrasados * valorMulta;
        console.log(`O total de dias atrasado foi de: ${diasTrasados}, o valor diário de multa é de R$${valorMulta} e o valor total da multa é de R$${valorTotal}.`);
    }
    listaGenero(genero) {
        if (genero === GeneroLivro_1.GeneroLivro.FANTASIA || genero === GeneroLivro_1.GeneroLivro.FICCAO || genero === GeneroLivro_1.GeneroLivro.ROMANCE) {
            return this.livros.filter((livro) => livro.generoLivro.includes(genero));
        }
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map