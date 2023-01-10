const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');


menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}

const parrafoUno = document.createElement('p');
const textoParrafoUno = document.createTextNode('Parrafo 1');

const elementoPadre = document.querySelector('.padre')

elementoPadre.appendChild(parrafoUno);
parrafoUno.appendChild(textoParrafoUno)