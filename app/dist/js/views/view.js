export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não encontrado no DOM!`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
