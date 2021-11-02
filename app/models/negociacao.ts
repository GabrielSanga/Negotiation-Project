export class Negociacao {

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

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));

        return new Negociacao(date, parseInt(valorString), parseFloat(valorString));
    }

} 