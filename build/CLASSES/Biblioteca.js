"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const StatusLivro_1 = require("../ENUMS/StatusLivro");
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
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro.nomeLivro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario.nomeUsuario);
        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL && userNome && userNome.nomeUsuario === usuario.nomeUsuario) {
            livroEncontrado.statusLivro = StatusLivro_1.StatusLivro.EMPRESTADO;
            usuario.historicoEmprestimo.push(livroEncontrado);
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi emprestado para o usuário "${usuario.nomeUsuario}".`);
            return true;
        }
        return false;
    }
    historicoEmprestimo(idUser) {
        let historicoIdUser = idUser.historicoEmprestimo;
        console.log(`Histórico de emprestimo do ${idUser.nomeUsuario}:\n`);
        console.log(historicoIdUser);
    }
    devolucao(livro, usuario) {
        const index = usuario.historicoEmprestimo.indexOf(livro);
        if (index !== -1) {
            livro.statusLivro = StatusLivro_1.StatusLivro.DISPONIVEL;
            usuario.historicoEmprestimo.splice(index, 1);
            console.log(`O livro:${livro.nomeLivro} foi devolvido pelo Usuario:${usuario.nomeUsuario}`);
        }
    }
    reservar(livro, usuario) {
        if (livro.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL) {
            livro.statusLivro = StatusLivro_1.StatusLivro.RESERVADO;
            console.log(`O livro ${livro.nomeLivro} está reservado para o ${usuario.nomeUsuario}`);
        }
        else {
            console.log(`Livro indisponível para empréstimo. O status dele é ${livro.statusLivro}`);
        }
    }
    multa(diasTrasados) {
        const valorMulta = 10;
        let valorTotal = diasTrasados * valorMulta;
        console.log(`O total de dias atrasado foi de: ${diasTrasados}, o valor diário de multa é de R$${valorMulta} e o valor total da multa é de R$${valorTotal}.`);
    }
    listaGenero(genero) {
        return this.livros.filter(livro => {
            for (const livroGenero of livro.generoLivro) {
                if (livroGenero === genero && livro.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL) {
                    return true;
                }
            }
            return false;
        });
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map