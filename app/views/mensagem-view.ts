export class MensagemView {

    private elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

    update(model: string): void {
       this.elemento.innerHTML = this.template(model);
    }

}