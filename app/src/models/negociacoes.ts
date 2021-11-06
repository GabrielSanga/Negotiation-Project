import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel{

    private aNegociacoes: Negociacao[] = [];

    public paraTexto(): string {
        return JSON.stringify(this.aNegociacoes, null, 2);
    }

    public adiciona(negociacao: Negociacao) {
        this.aNegociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[]{
        return this.aNegociacoes;
    }

}