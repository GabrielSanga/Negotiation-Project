import { injectDOM } from "../decorators/inject-dom.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
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
        fetch('http://localhost:8080/dados')
           .then(res => res.json())
           .then((dados: NegociacoesDoDia[]) =>{
               return dados.map(dado => {return new Negociacao(new Date(), dado.vezes, dado.montante)})
           })
           .then(negociacoesHoje => {
               for(let negociacao of negociacoesHoje){
                   this.negociacoes.adiciona(negociacao);
               }
               this.negociacoesView.update(this.negociacoes);
           });
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