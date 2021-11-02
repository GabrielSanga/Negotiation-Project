export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error("Classe filha precisa implementar o método Template");
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
