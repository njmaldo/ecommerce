

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const {email,pass} = this.form.value;
    console.log(email,pass);

});
