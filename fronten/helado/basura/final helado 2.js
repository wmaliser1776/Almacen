const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');


menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}


/*Aqui empeze a practicar como insertar parrafos en js 11/012023*/

/*
<div class="carts_embutido">
           <div class="text_embutido">
              <p class="p1_embutido">Jamon Cosido</p>
              <img class="logo_embutido" src="../fiambre/img-fiambre/logo champion.svg" alt="logo champion">
              <p class="precio1_embutido">$ <span class="precio2_embutido">190</span>.00</p>
              <p class="p2_embutido">100 Gr</p>
              <a href="./" class="pcompra_embutido">Comprar</a>
           </div>
           <img class="img_embutido" src="../fiambre/img-fiambre/salami-sandwich-open-sandwich-of-salami-slices-on-bread.jpg" alt="jamon">
        </div>
*/
var container = document.getElementById('padre');

padre.innerHTML = '<img src="./img-helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg">';