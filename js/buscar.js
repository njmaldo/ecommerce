import { productServices } from "../services/product-service.js";
const url = 'https://ecommerce-serv-app.herokuapp.com/';

const buscarInput = document.querySelector('#search__input');
const res = document.querySelector('#resultado');

const buscar = async () => {
    fetch(`${url}`)
    res.innerHTML = '';
    const txt = buscarInput.value.toLowerCase();
    const productos = await productServices.listaProductos();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(txt) !== -1){
            res.innerHTML += `
            <li>${producto.nombre} - Precio: ${producto.precio}</li>
            `;
        }
    }
    if(txt === '') {
        res.innerHTML += `
            <li>No se encontró el producto ${txt}</li>
            `;
    }
    
}
buscarInput.addEventListener('keyup', buscar);
