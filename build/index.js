"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livros_1 = require("./CLASSES/Livros");
const Usuario_1 = require("./CLASSES/Usuario");
const StatusLivro_1 = require("./ENUMS/StatusLivro");
const Biblioteca_1 = require("./CLASSES/Biblioteca");
const rl = require('readline-sync');
let newBiblioteca = new Biblioteca_1.Biblioteca();
function letreiro() {
    console.log(`\n-----      BEM VINDO A NOSSA BIBLIOTECA      -----\n\n`);
}
function menu() {
    console.clear();
    letreiro();
    console.log('1: Livro Disponível ');
    console.log('2: Livro Emprestado ');
    console.log('3: Livro Atrasado ');
    console.log('4: Livro Reservado ');
    console.log('5: Cadastro de Usuários ');
    console.log('6: Histórico de Empréstimos por Usuário ');
    console.log('7: Reservar de Livro ');
    console.log('8: Multa ');
    console.log('9: Listagem de Livros por Gênero ');
    console.log('10: Consultar usuários: ');
    console.log('11: Cadastrar livro: ');
    console.log('12: Emprestimo de Livro');
    console.log('13: Devolução de Livro');
    console.log('14: Sair do sistema');
    function encerrar() {
        process.exit(0);
    }
    let opcao = rl.questionInt('\n----------------- Digite uma opcao -----------------\n-> '.toUpperCase());
    switch (opcao) {
        case 1:
            console.clear();
            console.log(newBiblioteca.consultaDisponiveis());
            break;
        case 2:
            console.clear();
            console.log(newBiblioteca.livrosEmprestados());
            break;
        case 3:
            console.clear();
            console.log(newBiblioteca.livrosAtrasados());
            break;
        case 4:
            console.clear();
            console.log(newBiblioteca.livrosReservado());
            break;
        case 5:
            console.clear();
            const nome = rl.question('Digite o nome do usuário: '.toUpperCase());
            const id = rl.questionInt('Digite o ID do usuário: ');
            const contato = rl.questionInt('Digite o contato do usuário: ');
            let newUser = new Usuario_1.Usuario(nome, id, contato);
            newBiblioteca.addUsuarios(newUser);
            break;
        case 6:
            console.clear();
            const idUser = rl.questionInt('Digite o ID do usuário: ');
            newBiblioteca.historicoEmprestimo(idUser);
            break;
        case 7:
            console.clear();
            const nomeLivro = rl.question('Digite o nome do livro: '.toUpperCase());
            const nomeUsuer = rl.question("Digite o nome completo do usuário: ".toUpperCase());
            newBiblioteca.reservar(nomeLivro, nomeUsuer);
            break;
        case 8:
            console.clear();
            const diasAtraso = rl.questionInt('Quantos está atrasado a entrega: ');
            newBiblioteca.multa(diasAtraso);
            break;
        case 9:
            console.clear();
            const generoLivro = rl.question('Qual gênero está buscando: '.toUpperCase());
            console.log(newBiblioteca.listaGenero(generoLivro));
            break;
        case 10:
            console.clear();
            console.log(newBiblioteca.consultarUsuarios());
            break;
        case 11:
            console.clear();
            const titulo = rl.question('Digite o título do livro: '.toUpperCase());
            const genero = rl.question('Digite o gênero do livro: '.toUpperCase());
            const status = StatusLivro_1.StatusLivro.DISPONIVEL;
            const autor = rl.question('Digite o autor do livro: '.toUpperCase());
            let newLivro = new Livros_1.Livro(titulo, genero, status, autor);
            newBiblioteca.addDisponiveis(newLivro);
            break;
        case 12:
            console.clear();
            const tituloLivroEmpresta = rl.question('Digite o título do livro: '.toUpperCase());
            const nomeUserEmpresta = rl.question('Digite o nome completo do usuário: '.toUpperCase());
            return newBiblioteca.emprestarLivro(tituloLivroEmpresta, nomeUserEmpresta);
        case 13:
            console.clear();
            const tituloLivroDevolucao = rl.question('Digite o título do livro: '.toUpperCase());
            const nomeUserDevolucao = rl.question('Digite o nome completo do usuário: '.toUpperCase());
            newBiblioteca.devolucao(tituloLivroDevolucao, nomeUserDevolucao);
        case 14:
            encerrar();
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }
}
while (true) {
    menu();
    rl.question('Clique ENTER para continuar.');
}
//# sourceMappingURL=index.js.map