import { StatusLivro } from "../ENUMS/StatusLivro"
import { GeneroLivro } from "../ENUMS/GeneroLivro"

//Aqui criamos uma classe LIVRO

export class Livro {
  
    //Aqui temos os atributos e valores que serão padrão para cada livro
    nomeLivro: string
    generoLivro: GeneroLivro[]
    statusLivro: StatusLivro
    autor: string

    constructor(nomeLivro: string, generoLivro: GeneroLivro[], statusLivro: StatusLivro, autor: string) {

        this.nomeLivro = nomeLivro
        this.generoLivro = generoLivro
        this.statusLivro = statusLivro
        this.autor = autor
    }
}