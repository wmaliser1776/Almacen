const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');
const contenedor_main = document.querySelector('contenedor_main');

menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}

console.log('si funciona')

const productList = [];
productList.push({
    name: 'Palito de agua frutilla',
    price: 120,
    logo: './img-helado/logo luvianka.svg',
    unidad: 1,
    image: './img-helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});
productList.push({
    name: 'Palito de agua naranja',
    price: 120,
    logo: './img-helado/logo luvianka.svg',
    unidad: 1,
    image: './helado/top-view-ice-cream-on-stick-on-plate .jpg',
});
productList.push({
    name: 'Cono de crema',
    price: 250,
    logo: './img-helado/logo luvianka.svg',
    unidad: 1,
    image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});


/*
<div class="carts_embutido">
            <div class="text_embutido">
                <p class="p1_embutido">Jamon Cosido</p>
                <img class="logo_embutido" src="../fiambre/img-fiambre/logo champion.svg" alt="logo champion">
                <p class="precio1_embutido">$ <span class="precio2_embutido">190</span>.00</p>
                <p class="p2_embutido">100 Gr</p>
                <a href="./" class="pcompra_embutido">Comprar</a>
            </div>
                <img class="img_embutido" src="" alt="">
        </div>
*/


for (product of productList){
    const cartsEmbutido = document.createElement('div');
    cartsEmbutido.classList.add('carts_embutido');



        const text_embutido = document.createElement('div');
        text_embutido.classList.add('text_embutido');


            const p1_embutido = document.createElement('p');
            p1_embutido.innerText = product.name;

            const logoCards = document.createElement('img')
            logoCards.setAttribute('src',product.logo)

            const precio1_embutido = document.createElement('p');
            precio1_embutido.innerText = product.price;

            const p2_embutido = document.createElement('p');
            p2_embutido.innerText = product.unidad;
    

        
        text_embutido.appendChild(p1_embutido);
        text_embutido.appendChild(logoCards);
        text_embutido.appendChild(precio1_embutido);
        text_embutido.appendChild(p2_embutido);

        const img_embutido = document.createElement('img')
        img_embutido.setAttribute('src',product.image)

    cartsEmbutido.appendChild(text_embutido);
    cartsEmbutido.appendChild(img_embutido);

        contenedor_main.appendChild(cartsEmbutido);
}

console.log('no funcion')



