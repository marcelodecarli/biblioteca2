import { Livro } from "./CLASSES/Livros"
import { Usuario } from "./CLASSES/Usuario"
import { GeneroLivro } from "./ENUMS/GeneroLivro"
import { StatusLivro } from "./ENUMS/StatusLivro"
import { StatusUsuario } from "./ENUMS/StatusUsuario"
import { Biblioteca } from "./CLASSES/Biblioteca"



const rl = require('readline-sync')


//criando a biblioteca
let newBiblioteca = new Biblioteca()

// //instanciando novos livros

// let newLivro = new Livro('Harry Potter', [GeneroLivro.FANTASIA], StatusLivro.DISPONIVEL, 'Autor')
// let newLivro1 = new Livro('As longas tranças de um caréca', [GeneroLivro.FANTASIA], StatusLivro.DISPONIVEL, 'Autor')
// let newLivro2 = new Livro('Poeira no copo da água', [GeneroLivro.FICCAO], StatusLivro.DISPONIVEL, 'Autor')
// let newLivro3 = new Livro('Verão infernal', [GeneroLivro.ROMANCE], StatusLivro.DISPONIVEL, 'Autor')
// let newLivro4 = new Livro('BD RELACIONAL', [GeneroLivro.FANTASIA], StatusLivro.DISPONIVEL, 'Autor')


// //consultando os livros disponíveis
// newBiblioteca.consultaDisponiveis()

// //instanciando os usuários
// let newUser = new Usuario('Marcelo de Carli', 1, 51991874029)
// let newUser2 = new Usuario('Joao', 2, 51998067113)
// let newUser3 = new Usuario('Marcelo Rodrigues', 3, 51999333478)
// let newUser4 = new Usuario('Tomás Vargas', 4, 51986825453)


// //nessa etapa estamos adicionando os usuários a lista de usuários
// newBiblioteca.addUsuarios(newUser)
// newBiblioteca.addUsuarios(newUser2)
// newBiblioteca.addUsuarios(newUser3)
// newBiblioteca.addUsuarios(newUser4)

// //consultando os usuários
// newBiblioteca.consultarUsuarios()


// //Adicianando livros a lista de livros disponíveis
// newBiblioteca.addDisponiveis(newLivro)
// newBiblioteca.addDisponiveis(newLivro1)
// newBiblioteca.addDisponiveis(newLivro2)
// newBiblioteca.addDisponiveis(newLivro3)
// newBiblioteca.addDisponiveis(newLivro4)


// //Emprestando o livro
// newBiblioteca.emprestarLivro(newLivro, newUser)
// newBiblioteca.emprestarLivro(newLivro2, newUser)
// newBiblioteca.emprestarLivro(newLivro3, newUser)


// //consultando o histórico do usuário
// console.log("\npesquisando histórico")
// newBiblioteca.historicoEmprestimo(newUser)

// //devolvendo o livro
// console.log("\nDevolvendo o livro")
// newBiblioteca.devolucao(newLivro1, newUser)


// //reservando o livro
// console.log('\nResrevando o livro\n')
// newBiblioteca.reservar(newLivro1, newUser)

// console.log('\nconsultando os disponbíveis\n')
// newBiblioteca.consultaDisponiveis()



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
    console.log('14: Sair do sistema');



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
            let newLivro = new Livro(titulo, genero, status,autor)

            newBiblioteca.addDisponiveis(newLivro)
            break;

        case 12:
            console.clear()
            
            const tituloLivroEmpresta = rl.question('Digite o título do livro: '.toUpperCase())
            const nomeUserEmpresta = rl.question('Digite o nome completo do usuário: '.toUpperCase())

            return newBiblioteca.emprestarLivro(tituloLivroEmpresta, nomeUserEmpresta )

        case 13:
            console.clear()

            const tituloLivroDevolucao = rl.question('Digite o título do livro: '.toUpperCase())
            const nomeUserDevolucao = rl.question('Digite o nome completo do usuário: '.toUpperCase())


        newBiblioteca.devolucao(tituloLivroDevolucao,nomeUserDevolucao )
        
        case 14:

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
