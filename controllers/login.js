import { Autenticacion } from "../services/autenticacion.js";
import { Cliente } from "../services/usuarios.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const {email,pass} = this.form.value;
    // const email = document.querySelector('[data-email]').value;
    // const pass = document.querySelector('[data-pass]').value;
    console.log(email,pass);
    // console.log(Autenticacion.login(cliente,'123456'));
    // Autenticacion.login(email,pass)
    //               .then(() => {
    //                 window.location.href = 'index2.html';
    //               }).catch(err => console.log(err));
});
// const login = ()=> {
//     console.log(this.form.value);
//     const {email, password} = this.form.value;
//     this.Cliente.login(email, password)
//         .subscribe(res => {
//           if( res === true ) {
//             console.log(ok)
//                 this.router.navigateByUrl('/');
//             }else {
//                 al('Error', ok, 'error');
//             }
//         });
// }


// const logi = async(req, res) => {
//     const { email,password } = req.body;

//     try {
//         //Verifico si el email existe
//         const usuario = await Usuario.findOne({email});
//         if (!usuario ){
//             return res.status(400).json({
//                 msg: 'Contraseña incorrecta - email'
//             });
//         }
//         //Verifico la contraseña
//         const validPass = bcryptjs.compareSync(password, perfil.password);
//         if (!validPass){
//             return res.status(400).json({
//                 msg: 'Contraseña incorrecta - password'
//             });
//         }
       
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             msg:'Algo salió mal, hable con el administrador'
//         });
//     }

// }