import { clientServices } from "../services/service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.crearCliente(nombre,email)
                  .then(() => {
                    window.location.href = '/layouts/registro-completo.html';
                  }).catch(err => console.log(err));
});