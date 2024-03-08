import { Livro } from "./Livros"
import { GeneroLivro } from "../ENUMS/GeneroLivro"
import { StatusLivro } from "../ENUMS/StatusLivro"
import { StatusUsuario } from "../ENUMS/StatusUsuario"


export class Usuario {
    //Aqui temos os atributos e valores que serão padrão para cada livro

    nomeUsuario: string
    idUsuario: number
    contato: number
    status: StatusUsuario
    historicoEmprestimo: Livro[]

    constructor(nomeUsuario: string, idUsuario: number,contato: number) {

        this.nomeUsuario = nomeUsuario
        this.idUsuario = idUsuario
        this.contato = contato
        this.status = StatusUsuario.ATIVO
        this.historicoEmprestimo = []
    }
}