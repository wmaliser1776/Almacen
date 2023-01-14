const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');
const elementoPadre = document.querySelector('.padre');
const elementoInternoMenuDespla = document.querySelector('.myOrderContent');


menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}

function toggleproductDetail() {
   productDetail.classList.toggle('inactive');
}

console.log('si funciona')


//Aqui empiezo a trabajar con la lista de productos 12/01/2023


const productList = [];
productList.push({
   name: 'Palito de agua frutilla',
   price: 120.00,
   logo: './img-helado/LOGO Helami.png',
   unidad: 1 + ' ' +'Unidad',
   image: './img-helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});
productList.push({
   name: 'Palito de agua naranja',
   price: 120.00,
   logo: './img-helado/LOGO Helami.png',
   unidad: 1 + ' ' +'Unidad',
   image: './helado/top-view-ice-cream-on-stick-on-plate .jpg',
});
productList.push({
   name: 'Cono de crema',
   price: 250.00,
   logo: './img-helado/LOGO Helami.png',
   unidad: 1 + ' ' +'Unidad',
   image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});

productList.push({
   name: 'Cono de crema',
   price: 250.00,
   logo: './img-helado/LOGO Helami.png',
   unidad: 1 + ' ' +'Unidad',
   image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});

productList.push({
   name: 'Cono de crema',
   price: 250.00,
   logo: './img-helado/LOGO Helami.png',
   unidad: 1 + ' ' +'Unidad',
   image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});

productList.push({
   name: 'Cono de crema',
   price: 250.00,
   logo: './img-helado/LOGO Helami.png',
   unidad: 1 + ' ' +'Unidad',
   image: './helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg',
});



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

for (product of productList){


const divInicial = document.createElement('div');
divInicial.classList.add('carts_embutido');

   const div1 = document.createElement('div');
   div1.classList.add('text_embutido');

      const parrafoUno = document.createElement('p');
      parrafoUno.classList.add('p1_embutido');
      const textoParrafoUno = document.createTextNode(product.name);

      const logoCards = document.createElement('img');
      logoCards.classList.add('logo_embutido');
      logoCards.setAttribute('src', product.logo);

      const parrafoDos = document.createElement('p');
      parrafoDos.classList.add('precio1_embutido');
      const textoParrafoDos = document.createTextNode('$' + product.price);

      const parrafoTres = document.createElement('p');
      parrafoTres.classList.add('p2_embutido');
      const textoParrafoTres = document.createTextNode(product.unidad);

      const botonCards = document.createElement('a');
      botonCards.classList.add('pcompra_embutido');
      const textoBotonCards = document.createTextNode('comprar');

   divInicial.appendChild(div1);


const imgFondoCards = document.createElement('img');
imgFondoCards.classList.add('img_embutido');
imgFondoCards.setAttribute('src','./img-helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg');


divInicial.appendChild(imgFondoCards);



parrafoUno.appendChild(textoParrafoUno);
parrafoDos.appendChild(textoParrafoDos);
parrafoTres.appendChild(textoParrafoTres);
botonCards.appendChild(textoBotonCards);

div1.appendChild(parrafoUno);
div1.appendChild(logoCards);
div1.appendChild(parrafoDos);
div1.appendChild(parrafoTres);
div1.appendChild(botonCards);

elementoPadre.appendChild(divInicial);

};


   /*
   <div class="shopping-cart">
            <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
      <div class="div-crus-menu1">
         <a class="boton-crus" href=""><img class="crus" src="../fiambre/img-fiambre/crus.svg" alt="close"></a>
      </div>
   </div>     
   */

   
   
   
   const divInicialMenuDesplegable = document.createElement('div');
   divInicialMenuDesplegable.classList.add('shopping-cart');

      const figureImagenDeMenu = document.createElement('figure');

         const ImagenDeMenu = document.createElement('img');
         ImagenDeMenu.setAttribute('src','./img-helado/plate-with-ice-cubes-and-ice-cream-on-top .jpg');

            const nombreDeItem = document.createElement('p');
            const nombreDeItemDeMenu = document.createTextNode('Palito de Helado');


            const precioDeItem = document.createElement('p');
            const textoprecioDeItem = document.createTextNode('$' + ' ' + '30,00')

               const divbotonDeCrus = document.createElement('div');
               divbotonDeCrus.classList.add('div-crus-menu1');

         
                  const botonDeCrus = document.createElement('img');
                  botonDeCrus.setAttribute('src','./img-helado/crus.svg');
                  botonDeCrus.classList.add('crus');
                  
         
         figureImagenDeMenu.appendChild(ImagenDeMenu);

      divInicialMenuDesplegable.appendChild(figureImagenDeMenu);
      divInicialMenuDesplegable.appendChild(nombreDeItem);
      divInicialMenuDesplegable.appendChild(precioDeItem);
      divInicialMenuDesplegable.appendChild(divbotonDeCrus);

      nombreDeItem.appendChild(nombreDeItemDeMenu);
      precioDeItem.appendChild(textoprecioDeItem);

      divbotonDeCrus.appendChild(botonDeCrus);


   elementoInternoMenuDespla.appendChild(divInicialMenuDesplegable);

   