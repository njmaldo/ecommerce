import { environment } from'../environments/environment.js'

const url = environment.url;

//Get all Products
const listaProductos = () => fetch(`${url}/productos`)
                             .then(res => res.json());
//Create
const crearProducto = (nombre,precio,imgUrl,desc) => {
    return fetch(`${url}/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre,precio,imgUrl,desc,id: uuid.v4()})
    });
}
//Delete
const eliminarProducto = (id) => {
    return fetch(`${url}/productos/${id}`, {
        method: 'delete'
    });
}

const detalleProducto = (id) => {
    return fetch(`${url}/productos/${id}`)
           .then(res => res.json());
}
//update
const actualizarProducto = (nombre,precio,imgUrl,desc,id) => {
    return fetch(`${url}/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({nombre,precio,imgUrl,desc})
    })
     .then(res => res)
     .catch((err) => console.log(err));     
}


export const productServices = { 
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}
