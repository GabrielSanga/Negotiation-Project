import { Modelo } from "../interfaces/Modelo.js";

export class Negociacao implements Modelo<Negociacao>{

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    get volume(): number{
        return this.valor * this.quantidade 
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    public paraTexto(): string{
        return `
        Data: ${this._data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}.
        `;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));

        return new Negociacao(date, parseInt(valorString), parseFloat(valorString));
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate() 
           && this.data.getMonth() === negociacao.data.getMonth()
           && this.data.getFullYear() === negociacao.data.getFullYear();
    }

} 