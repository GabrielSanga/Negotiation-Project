import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private aNegociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.aNegociacoes.push(negociacao);
    }

    lista(): Array<Negociacao>{
        return this.aNegociacoes;
    }

}