import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private aNegociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.aNegociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{
        return this.aNegociacoes;
    }

}