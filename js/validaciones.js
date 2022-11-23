export const validar = (input) => {
    const tipoDeInput = input.dataset.tipo;
    if (validador[tipoDeInput]) {
        validador[tipoDeInput](input);
    }
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.classList.remove('textarea-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    }else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.classList.add('textarea-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput,input);
        // input.parentElement.querySelector('.textarea-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}
const validador = {};

const msgsError = {
    nombre: {
        valueMissing: 'El campo Nombre no puede estar vacio'
    },
    email: {
        valueMissing: 'El campo Email no puede estar vacio',
        typeMismatch: 'El correo no es válido.'
    },

}
const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'customError'
]

const mostrarMensajeDeError = (tipoDeInput, input) => {
    let mensaje = '';
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = msgsError[tipoDeInput][error];
        }
    });
    return mensaje;
}