const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');
const elementoPadre = document.querySelector('.padre');
const elementoInternoMenuDespla = document.querySelector('.myOrderContent');
const bottonCardsMain = document.querySelector('pcompra_visual');
const inicioDeCruzDeMenuCarrito = document.querySelector("contenedor_1")
const sumatoriaDeCarrito = document.getElementById('sumatoraCarrito')
const botonDeActulaizacionCarritoParaLocalStorage =  document.getElementById('botonCarrito')


menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}

function toggleproductDetail() {
   productDetail.classList.toggle('inactive');
}



//Aqui empiezo a trabajar con la lista de productos 12/01/2023


const productList = [];
console.log(productList)
productList.push({
   id: 0,
   name: 'Jamon Cosido',
   price: 190,
   priceBace: 190,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo champion.svg',
   unidad: 1,
   image: './img-fiambre/salami-sandwich-open-sandwich-of-salami-slices-on-bread.jpg',
});
productList.push({
   id: 1,
   name: 'Salame',
   price: 120,
   priceBace: 120,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo champion.svg',
   unidad: 1,
   image: './img-fiambre/fresh-and-delicious-salami.jpg',
});
productList.push({
   id: 2,
   name: 'Salchichón primavera',
   price: 120,
   priceBace: 120,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo luvianka.svg',
   unidad: 1,
   image: './img-fiambre/tomatoes-with-bread-cheese-sausage-cucumbers-on-wooden-table-high-angle-view.jpg',
});
productList.push({
    id: 3,
    name: 'Mortadela',
    price: 120,
    priceBace: 120,
    unidadVariante: 100 + 'Gr',
    logo: './img-fiambre/logo champion.svg',
    unidad: 1,
    image: './img-fiambre/salami-sausage-platter-with-wide-selection-of-charcuterie-foods-and-vegetables.jpg',
 });

 productList.push({
   id: 4,
   name: 'Queso',
   price: 120,
   priceBace: 120,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo cayelac.svg',
   unidad: 1,
   image: './img-fiambre/isometric-cheese-composition.jpg',
});

productList.push({
   id: 5,
   name: 'Queso Cremos',
   price: 120,
   priceBace: 120,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo punta del agua.svg',
   unidad: 1,
   image: './img-fiambre/slices-of-cheddar-cheese-on-chopping-board-with-slat-and-pepper-shaker-on-table.jpg',
});

productList.push({
   id: 6,
   name: 'Salchicha',
   price: 120,
   priceBace: 120,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo depin.svg',
   unidad: 1,
   image: './img-fiambre/flat-lay-hot-dogs-with-copy-space .jpg',
});

productList.push({
   id: 7,
   name: 'Salchicha',
   price: 120,
   priceBace: 120,
   unidadVariante: 100 + 'Gr',
   logo: './img-fiambre/logo champion.svg',
   unidad: 1,
   image: './img-fiambre/food-frame-with-copy-space-above-view .jpg',
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

const totalMenuCarrito = JSON.parse(localStorage.getItem("carritoTotal")) || [];
console.log(totalMenuCarrito)

const menucarrito =JSON.parse(localStorage.getItem("carritoItem")) || []; /* empiezo agregar la constante para poder agregar cosas al carrito 16/01/2023*/
console.log(menucarrito)


for (product of productList){

const divInicial = document.createElement('div');
divInicial.classList.add('carts_visual');


   const div1 = document.createElement('div');
   div1.classList.add('text_visual');

      const parrafoUno = document.createElement('p');
      parrafoUno.classList.add('p1_visual');
      const textoParrafoUno = document.createTextNode(product.name);

      const logoCards = document.createElement('img');
      logoCards.classList.add('logo_visual');
      logoCards.setAttribute('src', product.logo);

      const parrafoDos = document.createElement('p');
      parrafoDos.classList.add('precio1_visual');
      const textoParrafoDos = document.createTextNode('$' + product.price);

      const parrafoTres = document.createElement('p');
      parrafoTres.classList.add('p2_visual');
      const textoParrafoTres = document.createTextNode(product.unidadVariante);

      const botonCards = document.createElement('button');
      botonCards.classList.add('pcompra_visual');
      botonCards.setAttribute("id", product.id);

      const textoBotonCards = document.createTextNode('Comprar');
      
   divInicial.appendChild(div1);


const imgFondoCards = document.createElement('img');
imgFondoCards.classList.add('img_visual');
imgFondoCards.setAttribute('src', product.image);


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


elementoPadre.addEventListener('click', e => {

   if(e.target.classList.contains('pcompra_visual'))
      {
      const productCarrito = e.target.id
      console.log(productCarrito)




/*  push para sumatorai total*/

      const agregarAlCarritoSumatoria = productList.find((product) => product.id == productCarrito)
      console.log(agregarAlCarritoSumatoria)
      
      totalMenuCarrito.push(agregarAlCarritoSumatoria);
         console.log(totalMenuCarrito)


 /*  push para item menu*/

      const existente = menucarrito.some(product => product.id == productCarrito)

         if (existente){
            const prod = menucarrito.map (product => {
               if (product.id == productCarrito){
                  product.unidad++; 
                  product.price += product.priceBace;

               }
            })
         }  else {
            
            const agregarAlCarrito = productList.find((product) => product.id == productCarrito)
            console.log(agregarAlCarrito)
            
            menucarrito.push(agregarAlCarrito);
               console.log(menucarrito)
         }

/* sumar cunado llegue a 0*/
const agregarCuandoLlegueA0 = menucarrito.find((product) => product.id == productCarrito)
const unidad = agregarCuandoLlegueA0.unidad;
      
         if  (unidad === 0) {
            const prod = menucarrito.map (product => {
               if (product.id == productCarrito){
                  product.unidad++; 
                  product.price += product.priceBace;

               }
            })
         }


      actualizarCarritoCaca();
      saveLocal();
      }    
})



const actualizarCarritoCaca = () => {
   elementoInternoMenuDespla.innerHTML = ""

   menucarrito.forEach((product) => { 

      const divInicialMenuDesplegable = document.createElement('div');
      divInicialMenuDesplegable.classList.add('shopping-cart');
   
         const figureImagenDeMenu = document.createElement('figure');
         figureImagenDeMenu.classList.add('carritoFigure')
   
            const ImagenDeMenu = document.createElement('img');
            ImagenDeMenu.classList.add('itemCarritoImg')
            ImagenDeMenu.setAttribute('src', product.image);

               const contenedorCantidadDeItem = document.createElement('div');
               contenedorCantidadDeItem.classList.add('contenedorCantidadCarrito');

                  const cantidadDeItem = document.createElement('p');
                  cantidadDeItem.classList.add('cantidadCarrito');
                  const textoCantidadDeItem = document.createTextNode(product.unidad)
   
               const nombreDeItem = document.createElement('p');
               const nombreDeItemDeMenu = document.createTextNode(product.name);
   

               const precioDeItem = document.createElement('p');
               const textoprecioDeItem = document.createTextNode('$' + product.price)
   
                  const divbotonDeCrus = document.createElement('div');
                  divbotonDeCrus.classList.add('div-crus-menu1');
   
            
                     const botonDeCrus = document.createElement('img');
                     botonDeCrus.classList.add('boton-crus');
                     botonDeCrus.setAttribute('src','./img-fiambre/crus.svg');
                     botonDeCrus.classList.add('crus');
                     botonDeCrus.setAttribute("id",product.id);
                     
            
            figureImagenDeMenu.appendChild(ImagenDeMenu);
            figureImagenDeMenu.appendChild(contenedorCantidadDeItem);

            contenedorCantidadDeItem.appendChild(cantidadDeItem);

            cantidadDeItem.appendChild(textoCantidadDeItem);
   
         divInicialMenuDesplegable.appendChild(figureImagenDeMenu);
         divInicialMenuDesplegable.appendChild(nombreDeItem);
         divInicialMenuDesplegable.appendChild(precioDeItem);
         divInicialMenuDesplegable.appendChild(divbotonDeCrus);
         
   
         nombreDeItem.appendChild(nombreDeItemDeMenu);
         precioDeItem.appendChild(textoprecioDeItem);
         ;
   
         divbotonDeCrus.appendChild(botonDeCrus);
   
   
      elementoInternoMenuDespla.appendChild(divInicialMenuDesplegable);
   
   })

   sumatoriaDeCarrito.innerText = "$" + " " + totalMenuCarrito.reduce((acc , product) => acc + product.priceBace, 0)
}

console.log(elementoPadre);

botonDeActulaizacionCarritoParaLocalStorage.addEventListener('click', actualizarCarritoCaca);


/* empiezo agregar la constante para poder agregar cosas al carrito 16/01/2023*/


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


   elementoInternoMenuDespla.addEventListener('click', e => {

      if(e.target.classList.contains('boton-crus'))
         {

            const productCarrito2 = e.target.id
      
            const eliminarAlCarrito = totalMenuCarrito.find((product) => product.id == productCarrito2)
            const indice = menucarrito.indexOf(eliminarAlCarrito)
            totalMenuCarrito.splice(indice, 1)




         const productCarrito = e.target.id
   
         const agregarAlCarritoItem = menucarrito.find((product) => product.id == productCarrito)
   
         const existente = menucarrito.some(product => product.id == productCarrito)
   
            if (existente){
               const prod = menucarrito.map (product => {
                  if (product.id == productCarrito){
                     product.unidad--;  
                     
                     product.price -= product.priceBace
                  }
               })

            }  
            
               const productCarritoquitar = e.target.id
   
               const quitarAlCarritoItem = menucarrito.find((product) => product.id == productCarritoquitar)
               const unidad = quitarAlCarritoItem.unidad;


            

            if  (unidad === 0) {

               const productCarrito3 = e.target.id
               
               const eliminarItemDeCarrito = menucarrito.find((product) => product.id == productCarrito3)
               const indice5 = menucarrito.indexOf(eliminarItemDeCarrito)
               menucarrito.splice(indice5, 1)
            }
         actualizarCarritoCaca()
         saveLocal();
         }    
   
   
         
   })

   const saveLocal = () => {
      localStorage.setItem("carritoTotal",JSON.stringify (totalMenuCarrito));
      localStorage.setItem("carritoItem",JSON.stringify (menucarrito));
   };

   
