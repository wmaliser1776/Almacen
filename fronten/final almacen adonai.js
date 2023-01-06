const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');

menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Palito de agua frutilla',
    price: 120,
    image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg'
});
productList.push({
    name: 'Palito de agua naranja',
    price: 120,
    image: './helado/top-view-ice-cream-on-stick-on-plate .jpg'
});
productList.push({
    name: 'Cono de crema',
    price: 250,
    image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg'
});