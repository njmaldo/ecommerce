import { productServices } from "../services/product-service.js";


const newProduct = (nombre,precio,imgUrl,desc) => {
    const card = document.createElement('div');
    const contenido = `
            <div class="product__img">
                <img src="..${imgUrl}" alt="">
            </div>
            <div class="product__detail">
                <h3 class="product__detail-title"><a href="#">${nombre}</a></h3>
                <p class="product__detail-precio">${precio}</p>
                <a class="product__detail-icon" href="#!"><i class="fa-solid fa-cart-plus"></i></a>
                <p class="product__detail-desc">${desc}</p>
            </div>
            <button class="btn button"><span>Comprar</span></button>
    `;
    card.innerHTML = contenido;
    card.classList.add('product__card');
    return card;
}

const product = document.querySelector('[data-product]');
const render = async () => {
    try {
        const listaProductos = await productServices.listaProductos();
        listaProductos.forEach(item => {
            product.appendChild(newProduct(item.nombre,item.precio,item.imgUrl,item.desc));
        });
        
    } catch (error) {
        console.log(error);
    }
}
render();