import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();

        console.log(negociacao);
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));

        return new Negociacao(date, parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }

}