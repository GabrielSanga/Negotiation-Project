export function injectDOM(seletor: string){
    return function(target: any, propertyKey: string){

        const getter = function() {
            return document.querySelector(seletor);
        }

        Object.defineProperty(target, propertyKey, {get: getter});     
    }
}