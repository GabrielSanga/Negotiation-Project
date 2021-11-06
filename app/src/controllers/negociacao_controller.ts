import { injectDOM } from "../decorators/inject-dom.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    
    @injectDOM('#data')
    private inputData: HTMLInputElement;
    @injectDOM('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @injectDOM('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        
        if(!this.ehDiaUtil(negociacao.data)){   
            this.mensagemView.update("Somente negociações em dias úteis são permitidas!");
            return;
        }  
    
        this.negociacoes.adiciona(negociacao);

        this.limpaFormulario();
        this.atualizaView();
    }

    public importarDados(): void{
        alert("Oi");
    }

    private ehDiaUtil(data: Date): Boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
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