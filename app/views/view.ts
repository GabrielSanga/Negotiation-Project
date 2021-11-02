export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean;

    constructor(seletor: string, escapar: boolean = false){
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar;
        console.log(escapar);
    }

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
     }

     protected abstract template(model: T): string;

}
