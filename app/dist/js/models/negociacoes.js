export class Negociacoes {
    constructor() {
        this.aNegociacoes = [];
    }
    paraTexto() {
        return JSON.stringify(this.aNegociacoes, null, 2);
    }
    adiciona(negociacao) {
        this.aNegociacoes.push(negociacao);
    }
    lista() {
        return this.aNegociacoes;
    }
    ehIgual(objeto) {
        return JSON.stringify(this.aNegociacoes) === JSON.stringify(objeto.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map