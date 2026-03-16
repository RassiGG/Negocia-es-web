import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');


    constructor() {
       const data = document.querySelector('#data');
        const quantidade = document.querySelector('#quantidade');
        const valor = document.querySelector('#valor');

        if (!data || !quantidade || !valor) {
            throw new Error('Elemento do formulário não encontrado');
        }

        this.inputData = data as HTMLInputElement;
        this.inputQuantidade = quantidade as HTMLInputElement;
        this.inputValor = valor as HTMLInputElement;
        
        // Sample data to show table immediately
        this.negociacoes.adiciona(new Negociacao(new Date(), 100, 1.5));
        this.negociacoes.adiciona(new Negociacao(new Date(Date.now() - 86400000), 200, 2.5)); // yesterday
        this.negociacoes.adiciona(new Negociacao(new Date(Date.now() + 86400000), 300, 3.0));  // tomorrow
        
        this.negociacoesView.update(this.negociacoes);

    }

        adiciona(): void{   
            const negociacao = this.crianegociacao();
        console.log(negociacao);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.negociacoesView.update(this.negociacoes);
        this.limparformulario();
        this.mensagemView.update("Negociação adicionada com sucesso");
    }
    crianegociacao(): Negociacao{
            const exp = /-/g;  
            const quantidade = parseInt(this.inputQuantidade.value);
            const valor = parseFloat(this.inputValor.value);
            const date = new Date(this.inputData.value.replace(exp, ','));
            return new Negociacao( date, quantidade, valor );
        
    }
    limparformulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        
    }
}