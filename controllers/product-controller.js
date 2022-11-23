import { productServices } from "../services/product-service.js";

const crearNuevaLinea = (nombre,precio,imgUrl,desc,id) => {
    const linea = document.createElement('tr');
    const contenido =  `
        <td class="td" data-td>
            ${nombre}</td>
        <td>${precio}</td>
        <td>${desc}</td>
        <td><img src="${imgUrl}" width="50px" height="50px" alt=""></td>
        
        <td>
            <ul class="table__button-control">
            <li>
                <a href="../layouts/editar-producto.html?id=${id}"
                   class="simple-button simple-button--edit">
                   <i class="fa-solid fa-pen-to-square" style="color:#0071ea"></i></a>
            </li>
            <li>
                <button class="simple-button simple-button--delete"
                        type="button" id="${id}">
                    <i style="cursor:pointer;color:#df2525;" 
                        class="fas fa-trash-alt"></i>
                </button>
            </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;

    const btn = linea.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
        productServices.eliminarProducto(id)
                      .then(res => res)
                      .catch(err => alert(err,'¡Ups! Ocurrio un error...'));
    });
    return linea;
}
const table = document.querySelector('[data-table]');

productServices.listaProductos().then((data) => {
    data.forEach( ({ nombre,precio,imgUrl,desc,id }) => {
        const nuevaLinea = crearNuevaLinea(nombre,precio,imgUrl,desc,id);
        table.appendChild(nuevaLinea);
    });
}).catch((err) => alert(err,'¡Ups! Ocurrio un error...'));


