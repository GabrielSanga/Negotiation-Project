import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{

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

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.aNegociacoes) === JSON.stringify(objeto.lista());
    }

}