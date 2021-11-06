import { NegociacaoController } from "./controllers/negociacao_controller.js";
const controller = new NegociacaoController;
const form = document.querySelector(".form");
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação!');
}
const botaoImportar = document.querySelector('#botao-importar');
if (botaoImportar) {
    botaoImportar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error("Seletor não encontrado");
}
