export class Negociacoes {
    constructor() {
        this.aNegociacoes = [];
    }
    adiciona(negociacao) {
        this.aNegociacoes.push(negociacao);
    }
    lista() {
        return this.aNegociacoes;
    }
}
