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


    emprestarLivro(livro: string, usuario: string): boolean {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);


        console.log('aqui é o livro' + livroEncontrado.nomeLivro)

        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro.DISPONIVEL && userNome) {
            livroEncontrado.statusLivro = StatusLivro.EMPRESTADO;
            userNome.historicoEmprestimo.push(livroEncontrado);
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi emprestado para o usuário "${usuario}".`);
            return true;
        }

        return false;
    }


    historicoEmprestimo(idUser: string): boolean {
        // Criando a variável para armazenar o histórico pesquisado a partir do id do usuário
        const historico = this.usuarios.find(u => u.historicoEmprestimo.length > 0);
        let historicoIdUser = historico.historicoEmprestimo;

        // Verificando se o histórico está vazio
        if (historicoIdUser.length === 0) {
            console.log(`O usuário ${historico.nomeUsuario} não possui histórico de empréstimos.`);
            return false
        } else {
            console.log(`Histórico de empréstimo do ${historico.nomeUsuario}\n`);
            historicoIdUser.forEach((livro, index) => {
                console.log(`Empréstimo ${index + 1}:`);
                console.log(`Título do livro: ${livro.nomeLivro}`);
                console.log(`Status do livro: ${livro.statusLivro}`);
                console.log(`Autor do livro: ${livro.autor}`);
                console.log("\n");
                return true
            });
        }
    }


    devolucao(livro: string, usuario: string): boolean {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);

        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro.EMPRESTADO ||
            livroEncontrado && livroEncontrado.statusLivro === StatusLivro.ATRASADO ||
            livroEncontrado && livroEncontrado.statusLivro === StatusLivro.RESERVADO) {
            livroEncontrado.statusLivro = StatusLivro.DISPONIVEL;
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi DEVOLVIDO para o usuário "${usuario}".`);
            return true;
        }

        return false;
    }
    reservar(livro: string, usuario: string): boolean {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);


        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro.DISPONIVEL) {
            livroEncontrado.statusLivro = StatusLivro.RESERVADO;
            console.log(`O livro "${livroEncontrado.nomeLivro}" foi reservado para o usuário "${usuario}".`);
            return true;
        }

        return false;
    }

    addLivroAtrasado(livro: string, usuario: string): boolean {
        const livroEncontrado = this.livros.find(l => l.nomeLivro === livro);
        const userNome = this.usuarios.find(u => u.nomeUsuario === usuario);


        if (livroEncontrado && livroEncontrado.statusLivro === StatusLivro.EMPRESTADO) {
            livroEncontrado.statusLivro = StatusLivro.ATRASADO;
            console.log(`O livro "${livroEncontrado.nomeLivro}" está atrasado para o usuário "${usuario}".`);
            return true;
        }

        return false;
    }


    multa(diasTrasados: number) {
        const valorMulta: number = 10
        let valorTotal: number = diasTrasados * valorMulta
        console.log(`O total de dias atrasado foi de: ${diasTrasados}, o valor diário de multa é de R$${valorMulta} e o valor total da multa é de R$${valorTotal}.`)

    }

    listaGenero(genero: string): Livro[] {
        if (genero === GeneroLivro.FANTASIA || genero === GeneroLivro.FICCAO || genero === GeneroLivro.ROMANCE) {
            return this.livros.filter((livro) => livro.generoLivro.includes(genero));
        }
    }


}

export { Biblioteca }