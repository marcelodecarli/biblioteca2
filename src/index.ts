import { Livro } from "./CLASSES/Livros"
import { Usuario } from "./CLASSES/Usuario"
import { GeneroLivro } from "./ENUMS/GeneroLivro"
import { StatusLivro } from "./ENUMS/StatusLivro"
import { StatusUsuario } from "./ENUMS/StatusUsuario"
import { Biblioteca } from "./CLASSES/Biblioteca"



const rl = require('readline-sync')


//criando a biblioteca
let newBiblioteca = new Biblioteca()


function letreiro() {
    console.log(`\n-----      BEM VINDO A NOSSA BIBLIOTECA      -----\n\n`)
}

function menu() {
    console.clear()

    letreiro()


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
    console.log('14: Adicionar livro a lista de atrasados');
    console.log('15: Sair do sistema');



    function encerrar() {
        process.exit(0)
    }


    let opcao = rl.questionInt('\n----------------- Digite uma opcao -----------------\n-> '.toUpperCase())

    switch (opcao) {
        //Nessa chamada consultamos os livros disponíveis na biblioteca
        case 1:
            console.clear()
            console.log(newBiblioteca.consultaDisponiveis());
            break;

        //Nessa função consultamos os livros empresrtados da biblioteca
        case 2:
            console.clear()
            console.log(newBiblioteca.livrosEmprestados())
            break;

        case 3:
            console.clear()
            console.log(newBiblioteca.livrosAtrasados())
            break;

        case 4:
            console.clear()
            console.log(newBiblioteca.livrosReservado())
            break;

        case 5:
            console.clear()

            const nome = rl.question('Digite o nome do usuário: '.toUpperCase())
            const id = rl.questionInt('Digite o ID do usuário: ')
            const contato = rl.questionInt('Digite o contato do usuário: ')
            let newUser = new Usuario(nome, id, contato)

            newBiblioteca.addUsuarios(newUser)
            break;

        case 6:
            console.clear()

            const idUser = rl.questionInt('Digite o ID do usuário: ')
            newBiblioteca.historicoEmprestimo(idUser)
            break;

        case 7:
            console.clear()

            const nomeLivro = rl.question('Digite o nome do livro: '.toUpperCase())
            const nomeUsuer = rl.question("Digite o nome completo do usuário: ".toUpperCase())
            newBiblioteca.reservar(nomeLivro, nomeUsuer)
            break;
        case 8:
            console.clear()

            const diasAtraso = rl.questionInt('Quantos está atrasado a entrega: ')
            newBiblioteca.multa(diasAtraso)

            break;

        case 9:
            console.clear()

            const generoLivro: string = rl.question('Qual gênero está buscando: '.toUpperCase());
            console.log(newBiblioteca.listaGenero(generoLivro))
            break;

        case 10:
            console.clear()

            console.log(newBiblioteca.consultarUsuarios())
            break


        case 11:
            console.clear()

            const titulo = rl.question('Digite o título do livro: '.toUpperCase())
            const genero = rl.question('Digite o gênero do livro: '.toUpperCase())
            const status = StatusLivro.DISPONIVEL
            const autor = rl.question('Digite o autor do livro: '.toUpperCase())
            let newLivro = new Livro(titulo, genero, status, autor)

            newBiblioteca.addDisponiveis(newLivro)
            break;

        case 12:
            console.clear()

            const tituloLivroEmpresta = rl.question('Digite o título do livro: '.toUpperCase())
            const nomeUserEmpresta = rl.question('Digite o nome completo do usuário: '.toUpperCase())

            newBiblioteca.emprestarLivro(tituloLivroEmpresta, nomeUserEmpresta)
            break

        case 13:
            console.clear()

            const tituloLivroDevolucao = rl.question('Digite o título do livro: '.toUpperCase())
            const nomeUserDevolucao = rl.question('Digite o nome completo do usuário: '.toUpperCase())


            newBiblioteca.devolucao(tituloLivroDevolucao, nomeUserDevolucao)
            break

        case 14:
            console.clear()

            const tituloLivroatrasado = rl.question('Digite o título do livro: '.toUpperCase())
            const nomeUserAtrasado = rl.question('Digite o nome completo do usuário: '.toUpperCase())

            newBiblioteca.addLivroAtrasado(tituloLivroatrasado, nomeUserAtrasado)


            break;
        case 15:
            encerrar()
            break;

        default:
            console.log('Opção inválida. Tente novamente.')
            break;
    }

}

while (true) {
    menu()
    rl.question('Clique ENTER para continuar.')
}
