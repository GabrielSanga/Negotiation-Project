export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string){
        const elemento = document.querySelector(seletor);
        
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        }else{
            throw Error(`Seletor ${seletor} não encontrado no DOM!`);
        }
    }
    
    public update(model: T): void {
        let template = this.template(model);

        this.elemento.innerHTML = template;
     }

     protected abstract template(model: T): string;

}
