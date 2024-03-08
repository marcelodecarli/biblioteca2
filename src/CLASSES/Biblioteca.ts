import { Livro } from "./Livros"
import { Usuario } from "./Usuario"
import { StatusLivro } from "../ENUMS/StatusLivro"
import { StatusUsuario } from "../ENUMS/StatusUsuario"
import { GeneroLivro } from "../ENUMS/GeneroLivro"


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
    consultaDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro.DISPONIVEL);
    }


    //Nessa função consultamos os livros empresrtados da biblioteca
    livrosEmprestados(): Livro[] {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro.EMPRESTADO);
    }


    //Nessa função consultamos os livros atrasados da biblioteca
    livrosAtrasados(): Livro[] {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro.ATRASADO);
    }


    //Nessa função consultamos os livros reservados da biblioteca
    livrosReservado(): Livro[] {
        return this.livros.filter(livro => livro.statusLivro === StatusLivro.RESERVADO);
    }


    emprestarLivro(livro: Livro, usuario: Usuario): boolean {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro.nomeLivro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario.nomeUsuario)

        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro.DISPONIVEL && userNome && userNome.nomeUsuario === usuario.nomeUsuario) {
            livroEncontrado.statusLivro = StatusLivro.EMPRESTADO;
            usuario.historicoEmprestimo.push(livroEncontrado);
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi emprestado para o usuário "${usuario.nomeUsuario}".`);
            return true;
        }
    
        return false;
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
        const index = usuario.historicoEmprestimo.indexOf(livro);
        if (index !== -1) {
            livro.statusLivro = StatusLivro.DISPONIVEL;
            usuario.historicoEmprestimo.splice(index, 1);
            console.log(`O livro:${livro.nomeLivro} foi devolvido pelo Usuario:${usuario.nomeUsuario}`)
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
    
    multa(diasTrasados: number) {
        const valorMulta: number = 10
        let valorTotal: number = diasTrasados * valorMulta
        console.log(`O total de dias atrasado foi de: ${diasTrasados}, o valor diário de multa é de R$${valorMulta} e o valor total da multa é de R$${valorTotal}.`)

    }
    
    listaGenero(genero: string): Livro[] {

        return this.livros.filter(livro => {
            for (const livroGenero of livro.generoLivro) {
                if (livroGenero === genero && livro.statusLivro === StatusLivro.DISPONIVEL) {
                    return true;
                }
            }
            return false;
        });
    }

}

export { Biblioteca }