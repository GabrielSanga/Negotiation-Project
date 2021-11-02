export class View {
    constructor(seletor, escapar = false) {
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar;
        console.log(escapar);
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
