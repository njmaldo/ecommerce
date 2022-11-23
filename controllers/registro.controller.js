import { clientServices } from "../services/client-service.js";
import { productServices } from "../services/product-service.js";

//Clientes
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-pass]').value;
    clientServices.crearCliente(nombre,email,password)
                  .then(() => {
                    window.location.href = '/layouts/cliente-registrado.html';
                  }).catch(err => console.log(err));
});

//Productos
const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const desc = document.querySelector('[data-desc]').value;
    const imgUrl = document.querySelector('[data-img]').value;
    productServices.crearProducto(nombre,precio,imgUrl,desc)
                  .then(() => {
                    window.location.href = '/layouts/producto-registrado.html';
                  }).catch(err => console.log(err));
});