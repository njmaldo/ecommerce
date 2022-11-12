import { clientServices } from "../services/service.js";

const crearNuevaLinea = (nombre,email,id) => {
    const linea = document.createElement('tr');
    const contenido =  `
        <td class="td" data-td>
        ${nombre}
        </td>
        <td>
        ${email}
        </td>
        <td>
            <ul class="table__button-control">
            <li>
                <a href="../layouts/editar-cliente.html?id=${id}"
                   class="simple-button simple-button--edit">
                   <i class="fa-solid fa-pen-to-square"></i></a>
            </li>
            <li>
                <button class="simple-button simple-button--delete"
                        type="button" id="${id}">
                    <i style="cursor:pointer;" 
                        class="fa-solid fa-trash-alt text-danger ms-2"></i>
                </button>
            </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;

    const btn = linea.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
        clientServices.eliminarCliente(id)
                      .then(res => res)
                      .catch(err => alert(err,'¡Ups! Ocurrio un error...'));
    });
    return linea;
}
const table = document.querySelector('[data-table]');

clientServices.listaClientes().then((data) => {
    data.forEach( ({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((err) => alert(err,'¡Ups! Ocurrio un error...'));
