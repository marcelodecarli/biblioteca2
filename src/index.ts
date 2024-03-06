import { Livro } from "./CLASSES/Livros"
import { Usuario } from "./CLASSES/Usuario"
import { GeneroLivro } from "./ENUMS/GeneroLivro"
import { StatusLivro } from "./ENUMS/StatusLivro"
import { StatusUsuario } from "./ENUMS/StatusUsuario"

class Biblioteca {
    livros: Livro[]
    usuarios: Usuario[]

    constructor() {
        this.livros = []
        this.usuarios = []
    }



    //aqui estamos adicionando o usuário a lista de usuários
    addUsuarios(user: Usuario) {
        this.usuarios.push(user)
    }

    //aqui estamos consultando a lista de usuários
    consultarUsuarios() {
        console.log(this.usuarios)
    }

    //Nessa função adicionamos os livros a lista de livros disponíveis
    addDisponiveis(livroTal: Livro): void {
        this.livros.push(livroTal)
    }


    //Nessa função consultamos os livros disponíveis na biblioteca
    // consultaDisponiveis(): void {
    //     let livro: Livro
    //     if (livro.statusLivro === StatusLivro.DISPONIVEL) {
    //         console.log(this.livros)
    //     }
    // }

    //Nessa função consultamos os livros disponíveis na biblioteca
    consultaDisponiveis(): void {
        const livrosDisponiveis = this.livros.filter((livro) => livro.statusLivro === StatusLivro.DISPONIVEL);
        console.log(livrosDisponiveis)
    }



    //Nessa função consultamos os livros empresrtados da biblioteca
    livrosEmprestados() {

        if (StatusLivro.EMPRESTADO) {
            console.log(this.livros)
        }
    }

    //Nessa função consultamos os livros atrasados da biblioteca
    livrosAtrasados() {

        if (StatusLivro.ATRASADO) {
            console.log(this.livros)
        }
    }

    //Nessa função consultamos os livros reservados da biblioteca
    livrosReservado() {

        if (StatusLivro.RESERVADO) {
            console.log(this.livros)
        }
    }


    emprestarLivro(livro: Livro, usuario: Usuario): void {
        if (livro.statusLivro === StatusLivro.DISPONIVEL) {
            livro.statusLivro = StatusLivro.EMPRESTADO;
            usuario.historicoEmprestimo.push(livro);
            console.log(`O livro:${livro.nomeLivro} foi emprestado para o Usuario:${usuario.nomeUsuario}`)
        } else {
            console.log(`Livro indisponível para empréstimo. O status dele é ${StatusLivro}`)
        }
    }


    //consulta de histórico
    historicoEmprestimo(idUser: Usuario): void {

        //criando a variável para armazenar o histórico pesquisado a partir do id do usuário

        let historicoIdUser = idUser.historicoEmprestimo
        //Aqui apresantamos o resultado
        console.log(`Histórico de emprestimo do ${idUser.nomeUsuario}:\n`)
        console.log(historicoIdUser);
    }


    devolucao(livro: Livro, usuario: Usuario): void {
        if (livro.statusLivro === StatusLivro.EMPRESTADO) {
            livro.statusLivro = StatusLivro.DISPONIVEL;
            console.log(`O livro devolvido por ${usuario.nomeUsuario}`)

        } else {
            console.log(`Livro indisponível para empréstimo. O status dele é ${livro.statusLivro}`)
        }
    }

    reservar(livro: Livro, usuario: Usuario) {
        if (livro.statusLivro === StatusLivro.DISPONIVEL) {
            livro.statusLivro = StatusLivro.RESERVADO;
            console.log(`O livro ${livro.nomeLivro} está reservado para o ${usuario.nomeUsuario}`)

        } else {
            console.log(`Livro indisponível para empréstimo. O status dele é ${livro.statusLivro}`)
        }
    }

    multa(usuario: Usuario){
        let prazoEntrega
    }


    // calcularDiasAtraso(usuario: Usuario, diasAtrasoTotal: number): number {
    //     const prazoDevolucaoPadraoEmDias = 14; 
    //     diasAtrasoTotal
    
    //     // Percorrendo o histórico de empréstimos do usuário
    // for (const livro of usuario.historicoEmprestimos) {
            
    // const dataAtual = new Date();
    //     const dataDevolucaoEsperada = new Date(dataAtual);
    //     dataDevolucaoEsperada.setDate(dataDevolucaoEsperada.getDate() + prazoDevolucaoPadraoEmDias);
    //     const diffTime = dataAtual.getTime() - dataDevolucaoEsperada.getTime();
    //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // if (diffDays > 0) {
    //     diasAtrasoTotal += diffDays; 
    // }
    // }
    //     return diasAtrasoTotal; 
    // }
}



//criando a biblioteca
let newBiblioteca = new Biblioteca()

//instanciando novos livros

let newLivro = new Livro('Harry Potter', [GeneroLivro.FANTASIA], StatusLivro.DISPONIVEL, 'Autor')
let newLivro1 = new Livro('As longas tranças de um caréca', [GeneroLivro.FANTASIA], StatusLivro.DISPONIVEL, 'Autor')
let newLivro2 = new Livro('Poeira no copo da água', [GeneroLivro.FICCAO], StatusLivro.DISPONIVEL, 'Autor')
let newLivro3 = new Livro('Verão infernal', [GeneroLivro.ROMANCE], StatusLivro.DISPONIVEL, 'Autor')
let newLivro4 = new Livro('BD RELACIONAL', [GeneroLivro.FANTASIA], StatusLivro.DISPONIVEL, 'Autor')


//consultando os livros disponíveis
newBiblioteca.consultaDisponiveis()



//instanciando os usuários
let newUser = new Usuario('Marcelo de Carli', 1, 51991874029)
let newUser2 = new Usuario('Joao', 2, 51998067113)
let newUser3 = new Usuario('Marcelo Rodrigues', 3, 51999333478)
let newUser4 = new Usuario('Tomás Vargas', 4, 51986825453)


//nessa etapa estamos adicionando os usuários a lista de usuários
newBiblioteca.addUsuarios(newUser)
newBiblioteca.addUsuarios(newUser2)
newBiblioteca.addUsuarios(newUser3)
newBiblioteca.addUsuarios(newUser4)

//consultando os usuários
newBiblioteca.consultarUsuarios()


//Adicianando livros a lista de livros disponíveis
newBiblioteca.addDisponiveis(newLivro)
newBiblioteca.addDisponiveis(newLivro1)
newBiblioteca.addDisponiveis(newLivro2)
newBiblioteca.addDisponiveis(newLivro3)
newBiblioteca.addDisponiveis(newLivro4)


//Emprestando o livro
newBiblioteca.emprestarLivro(newLivro, newUser)
newBiblioteca.emprestarLivro(newLivro2, newUser)
newBiblioteca.emprestarLivro(newLivro3, newUser)


//consultando o histórico do usuário
console.log("\npesquisando histórico")
newBiblioteca.historicoEmprestimo(newUser)

//devolvendo o livro
console.log("\nDevolvendo o livro")
newBiblioteca.devolucao(newLivro1, newUser)


//reservando o livro
console.log('\nResrevando o livro\n')
newBiblioteca.reservar(newLivro1, newUser)

console.log('\nconsultando os disponbíveis\n')
newBiblioteca.consultaDisponiveis()