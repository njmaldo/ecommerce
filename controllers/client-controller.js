import { clientServices } from "../services/client-service.js";

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
        clientServices.eliminarCliente(id)
                      .then(res => res)
                      .catch(err => alert(err,'¡Ups! Hay un error...'));
    });
    return linea;
}
const table = document.querySelector('[data-table]');

clientServices.listaClientes().then((data) => {
    data.forEach( ({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((err) => alert(err,'¡Ups! Hay un error...'));
