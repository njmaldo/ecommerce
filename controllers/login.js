import { clientServices } from "../services/client-service.js";

const url = 'https://ecommerce-serv-app.herokuapp.com/';
const form = document.querySelector('[data-form]');

// form.addEventListener('submit', (evento) => {
//     evento.preventDefault();
//     fetch(`${url}`)
//     const email = document.querySelector('[data-email]');
//     const pass = document.querySelector('[data-pass]');
//     const login = clientServices.detalleCliente(email,pass); 
//     console.log(login);

// });
// const login = async () => {
//     fetch(`${url}`)
//     const  = buscarInput.value.toLowerCase();
//     const productos = await productServices.listaProductos();
//     for(let producto of productos){
//         let nombre = producto.nombre.toLowerCase();
//         if(nombre.indexOf(txt) !== -1){
//             res.innerHTML += `
//             <li>${producto.nombre} - Precio: ${producto.precio}</li>
//             `;
//         }
//     }
//     if(txt === '') {
//         res.innerHTML += `
//             <li>No se encontró el producto ${txt}</li>
//             `;
//     }
    
// }
// const log = async(req, res) => {
//     const { email,password } = req.body;
//     try {
//         //Verifico si el email existe
//         const usuario = await clientServices.findOne({email});
//         if (!usuario ){
//             return res.status(400).json({
//                 ok: false,
//                 msg: 'Contraseña incorrecta - email'
//             });
//         }
//         //Verifico si el usuario está activo
//         if (!usuario.email ){
//             return res.status(400).json({
//                 ok: false,
//                 msg: 'El Usuario no existe'
//             });
//         }
//         //Verifico la contraseña
//         if (!validPass){
//             return res.status(400).json({
//                 ok: false,
//                 msg: 'Contraseña incorrecta - password'
//             });
//         }
//     }
// }    