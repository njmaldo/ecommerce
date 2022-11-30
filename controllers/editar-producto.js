import { productServices } from '../services/product-service.js';

const form = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    if(id == null) {
        window.location.href = '../layouts/error.html';
    }
    
    try {
        const productos = await productServices.detalleProducto(id);
        if(productos.nombre && productos.precio && productos.desc ) {
            const nombre = document.querySelector('[data-nombre]');
            const precio = document.querySelector('[data-precio]');
            const desc = document.querySelector('[data-desc]');
            const imgUrl = document.querySelector('[data-img]');
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            desc.value = productos.desc;
            imgUrl.value = productos.imgUrl;
            // imgUrl.setAttribute('src', productos.imgUrl);

        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = '../layouts/error.html';
    }
          
}
obtenerInformacion();

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const desc = document.querySelector('[data-desc]').value;
    const imgUrl = document.querySelector('[data-img]').value;
    productServices.actualizarProducto(nombre,precio,desc,imgUrl,id)
                  .then(() => {
                    window.location.href = '../layouts/producto-editado.html';
                  });

});