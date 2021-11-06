export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    paraTexto() {
        return `
        Data: ${this._data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}.
        `;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        return new Negociacao(date, parseInt(valorString), parseFloat(valorString));
    }
}
