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
const elementoPadre = document.querySelector('.padre');



const div1 = document.createElement('div');

const parrafoUno = document.createElement('p');
const textoParrafoUno = document.createTextNode('Jamon Cosido');

const logoCards = document.createElement('img')


const parrafoDos = document.createElement('p');
const textoParrafoDos = document.createTextNode('$' + '190');

const parrafoTres = document.createElement('p');
const textoParrafoTres = document.createTextNode('100 Gr');


div1.appendChild(parrafoUno);
div1.appendChild(logoCards);
div1.appendChild(parrafoDos);
div1.appendChild(parrafoTres);

elementoPadre.appendChild(div1);
parrafoUno.appendChild(textoParrafoUno);
parrafoDos.appendChild(textoParrafoDos);
parrafoTres.appendChild(textoParrafoTres);
