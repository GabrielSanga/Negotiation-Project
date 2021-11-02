export function injectDOM(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            return document.querySelector(seletor);
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
