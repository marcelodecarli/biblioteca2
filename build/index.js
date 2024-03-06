"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livros_1 = require("./CLASSES/Livros");
const Usuario_1 = require("./CLASSES/Usuario");
const GeneroLivro_1 = require("./ENUMS/GeneroLivro");
const StatusLivro_1 = require("./ENUMS/StatusLivro");
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
        const livrosDisponiveis = this.livros.filter((livro) => livro.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL);
        console.log(livrosDisponiveis);
    }
    livrosEmprestados() {
        if (StatusLivro_1.StatusLivro.EMPRESTADO) {
            console.log(this.livros);
        }
    }
    livrosAtrasados() {
        if (StatusLivro_1.StatusLivro.ATRASADO) {
            console.log(this.livros);
        }
    }
    livrosReservado() {
        if (StatusLivro_1.StatusLivro.RESERVADO) {
            console.log(this.livros);
        }
    }
    emprestarLivro(livro, usuario) {
        if (livro.statusLivro === StatusLivro_1.StatusLivro.DISPONIVEL) {
            livro.statusLivro = StatusLivro_1.StatusLivro.EMPRESTADO;
            usuario.historicoEmprestimo.push(livro);
            console.log(`O livro:${livro.nomeLivro} foi emprestado para o Usuario:${usuario.nomeUsuario}`);
        }
        else {
            console.log(`Livro indisponível para empréstimo. O status dele é ${StatusLivro_1.StatusLivro}`);
        }
    }
    historicoEmprestimo(idUser) {
        let historicoIdUser = idUser.historicoEmprestimo;
        console.log(`Histórico de emprestimo do ${idUser.nomeUsuario}:\n`);
        console.log(historicoIdUser);
    }
    devolucao(livro, usuario) {
        if (livro.statusLivro === StatusLivro_1.StatusLivro.EMPRESTADO) {
            livro.statusLivro = StatusLivro_1.StatusLivro.DISPONIVEL;
            console.log(`O livro devolvido por ${usuario.nomeUsuario}`);
        }
        else {
            console.log(`Livro indisponível para empréstimo. O status dele é ${livro.statusLivro}`);
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
}
let newBiblioteca = new Biblioteca();
let newLivro = new Livros_1.Livro('Harry Potter', [GeneroLivro_1.GeneroLivro.FANTASIA], StatusLivro_1.StatusLivro.DISPONIVEL, 'Autor');
let newLivro1 = new Livros_1.Livro('As longas tranças de um caréca', [GeneroLivro_1.GeneroLivro.FANTASIA], StatusLivro_1.StatusLivro.DISPONIVEL, 'Autor');
let newLivro2 = new Livros_1.Livro('Poeira no copo da água', [GeneroLivro_1.GeneroLivro.FICCAO], StatusLivro_1.StatusLivro.DISPONIVEL, 'Autor');
let newLivro3 = new Livros_1.Livro('Verão infernal', [GeneroLivro_1.GeneroLivro.ROMANCE], StatusLivro_1.StatusLivro.DISPONIVEL, 'Autor');
let newLivro4 = new Livros_1.Livro('BD RELACIONAL', [GeneroLivro_1.GeneroLivro.FANTASIA], StatusLivro_1.StatusLivro.DISPONIVEL, 'Autor');
newBiblioteca.consultaDisponiveis();
let newUser = new Usuario_1.Usuario('Marcelo de Carli', 1, 51991874029);
let newUser2 = new Usuario_1.Usuario('Joao', 2, 51998067113);
let newUser3 = new Usuario_1.Usuario('Marcelo Rodrigues', 3, 51999333478);
let newUser4 = new Usuario_1.Usuario('Tomás Vargas', 4, 51986825453);
newBiblioteca.addUsuarios(newUser);
newBiblioteca.addUsuarios(newUser2);
newBiblioteca.addUsuarios(newUser3);
newBiblioteca.addUsuarios(newUser4);
newBiblioteca.consultarUsuarios();
newBiblioteca.addDisponiveis(newLivro);
newBiblioteca.addDisponiveis(newLivro1);
newBiblioteca.addDisponiveis(newLivro2);
newBiblioteca.addDisponiveis(newLivro3);
newBiblioteca.addDisponiveis(newLivro4);
newBiblioteca.emprestarLivro(newLivro, newUser);
newBiblioteca.emprestarLivro(newLivro2, newUser);
newBiblioteca.emprestarLivro(newLivro3, newUser);
console.log("\npesquisando histórico");
newBiblioteca.historicoEmprestimo(newUser);
console.log("\nDevolvendo o livro");
newBiblioteca.devolucao(newLivro1, newUser);
console.log('\nResrevando o livro\n');
newBiblioteca.reservar(newLivro1, newUser);
console.log('\nconsultando os disponbíveis\n');
newBiblioteca.consultaDisponiveis();
//# sourceMappingURL=index.js.map