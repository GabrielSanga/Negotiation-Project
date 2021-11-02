export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean;

    constructor(seletor: string, escapar: boolean = false){
        const elemento = document.querySelector(seletor);
        
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        }else{
            throw Error(`Seletor ${seletor} não encontrado no DOM!`);
        }

        this.escapar = escapar;
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
