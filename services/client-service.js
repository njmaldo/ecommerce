import { environment } from'../environments/environment.js'

const url = environment.url;

const listaClientes = () => fetch(`${url}/perfil`)
                            .then(res => res.json());
//Create
const crearCliente = (nombre,email,password) => {
    return fetch(`${url}/perfil`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre,email,password,id: uuid.v4()})
    });
}
//Delete
const eliminarCliente = (id) => {
    return fetch(`${url}/perfil/${id}`, {
        method: 'delete'
    });
}

const detalleCliente = (id) => {
    return fetch(`${url}/perfil/${id}`)
           .then(res => res.json());
}
//update
const actualizarCliente = (nombre,email,id) => {
    return fetch(`${url}/perfil/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({nombre,email})
    })
     .then(res => res)
     .catch((err) => console.log(err));     
}


export const clientServices = { 
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}
