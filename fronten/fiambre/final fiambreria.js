const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');

menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}
console.log("funciona")