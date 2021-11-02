import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
        const negociacao = this.criaNegociacao();
        
        this.negociacoes.adiciona(negociacao);

        this.limpaFormulario();
        this.atualizaView()
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));

        return new Negociacao(date, parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }

    private limpaFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);

        this.mensagemView.update("Cadastrado com Sucesso!");
    }

}