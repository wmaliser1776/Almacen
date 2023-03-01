const menuDesplegable = document.querySelector('.carrito');
const productDetail = document.querySelector('.productDetail');


const elementoPadre = document.querySelector('.padre');
const elementoInternoMenuDespla = document.querySelector('.myOrderContent');
const bottonCardsMain = document.querySelector('pcompra_visual');
const inicioDeCruzDeMenuCarrito = document.querySelector("contenedor_1")
const sumatoriaDeCarrito = document.getElementById('sumatoraCarrito')
const botonDeActulaizacionCarritoParaLocalStorage =  document.getElementById('botonCarrito')
const botonDeMenuDeConfirmacion = document.querySelector('.tituloBoton');


const menuDesplegableConfirmacion = document.querySelector('.tituloBoton');
const botonMenuDeConfirmacion = document.querySelector('.menuDeConfirmacion');




menuDesplegable.addEventListener('click', toggleproductDetail);

function toggleproductDetail() {
    productDetail.classList.toggle('inactive');
}

function toggleproductDetail() {
   productDetail.classList.toggle('inactive');
}




menuDesplegableConfirmacion.addEventListener('click', toggleproductmain);
console.log(menuDesplegableConfirmacion)

function toggleproductmain () {
   botonMenuDeConfirmacion.classList.toggle('activar');
}

function toggleproductmain () {
   botonMenuDeConfirmacion.classList.toggle('activar');
}



//function verdeconfirmacion(){
//   document.querySelector("shopping-cart").setAttribute("bgcolor");

//}


//Aqui empiezo a trabajar con la lista de productos 12/01/2023


const productList = [];
console.log(productList)
productList.push({
   id: 100,
   name: 'Palito de agua frutilla',
   price: 120,
   priceBace: 120,
   logo: './img/LOGO helado 1-Helami.png',
   unidad: 1,
   image: './img/helado 1-plate-with-ice-cubes-and-ice-cream-on-top .jpg',
   imagenConfirmacion: './img/tilde.svg',
   numeroDeImagenDeConfirmacion: 0,
});
productList.push({
   id: 101,
   name: 'Palito de agua naranja',
   price: 120,
   priceBace: 120,
   logo: './img/LOGO helado 1-Helami.png',
   unidad: 1,
   image: './img/helado 2-top-view-ice-cream-on-stick-on-plate.jpg',
   imagenConfirmacion: './img/tilde.svg',
   numeroDeImagenDeConfirmacion: 0,
});
productList.push({
   id: 102,
   name: 'Cono de crema',
   price: 250,
   priceBace: 250,
   logo: './img/LOGO helado 1-Helami.png',
   unidad: 1,
   image: './img/helado 3-top-view-plate-with-ice-cream-on-cones.jpg',
   imagenConfirmacion: './img/tilde.svg',
   numeroDeImagenDeConfirmacion: 0,
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


menucarrito.forEach((product) => {

const divInicialMenuDesplegable = document.createElement('div');
divInicialMenuDesplegable.classList.add('contenedorItemDeConfirmacion')
      
   
      const divDeseparacionDeConfirmacion = document.createElement('div')
      divDeseparacionDeConfirmacion.classList.add('shopping-cart');

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
               nombreDeItem.classList.add('nombreItemsConfirmacion')
               const nombreDeItemDeMenu = document.createTextNode(product.name);
   

               const precioDeItem = document.createElement('p');
               const textoprecioDeItem = document.createTextNode('$' + product.price)
   
                  const divbotonDeCrus = document.createElement('div');
                  divbotonDeCrus.classList.add('div-crus-menu1');
   
            
                     const botonDeCrus = document.createElement('img');
                     botonDeCrus.classList.add('boton-crus');
                     botonDeCrus.setAttribute('src','./img/crus.svg');
                     botonDeCrus.classList.add('crus');
                     botonDeCrus.setAttribute("id",product.id);


                     const botonDeMas = document.createElement('img');
                     botonDeMas.classList.add('boton-crus');
                     botonDeMas.setAttribute('src','./img/mas.svg');
                     botonDeMas.classList.add('crus');
                     botonDeMas.setAttribute("id",product.id);


                  const seccionDeConfirmacion = document.createElement('div');
                  seccionDeConfirmacion.classList.add('divDeSeparacionDeConfirmacion');

                     const capsulaTextoDeConfirmacion = document.createElement('p');
                     capsulaTextoDeConfirmacion.classList.add('textoDeConfirmacion')
                     const TextoDeConfirmacion = document.createTextNode('NO CONFIRMADO');

                     const botonDeConfirmacion = document.createElement('img');
                     botonDeConfirmacion.classList.add('boton-tilde');
                     botonDeConfirmacion.setAttribute('src',product.imagenConfirmacion)
                     botonDeConfirmacion.setAttribute("id",product.id);
                     
            
            figureImagenDeMenu.appendChild(ImagenDeMenu);
            figureImagenDeMenu.appendChild(contenedorCantidadDeItem);

            contenedorCantidadDeItem.appendChild(cantidadDeItem);

            cantidadDeItem.appendChild(textoCantidadDeItem);
   
         divDeseparacionDeConfirmacion.appendChild(figureImagenDeMenu);
         divDeseparacionDeConfirmacion.appendChild(nombreDeItem);
         divDeseparacionDeConfirmacion.appendChild(precioDeItem);
         divDeseparacionDeConfirmacion.appendChild(divbotonDeCrus);
         divDeseparacionDeConfirmacion.appendChild(seccionDeConfirmacion);
         
         
   
         nombreDeItem.appendChild(nombreDeItemDeMenu);
         precioDeItem.appendChild(textoprecioDeItem);
         
   
         divbotonDeCrus.appendChild(botonDeCrus);
         divbotonDeCrus.appendChild(botonDeMas);

         seccionDeConfirmacion.appendChild(capsulaTextoDeConfirmacion);
         seccionDeConfirmacion.appendChild(botonDeConfirmacion);

            capsulaTextoDeConfirmacion.appendChild(TextoDeConfirmacion);

         divInicialMenuDesplegable.appendChild(divDeseparacionDeConfirmacion);
         divInicialMenuDesplegable.appendChild(seccionDeConfirmacion);

         botonMenuDeConfirmacion.appendChild(divInicialMenuDesplegable);

         
});



// const botonDeConfirmacion = document.querySelector('.boton-tilde')

elementoPadre.addEventListener('click', e => {

   if(e.target.classList.contains('boton-tilde'))
   {
   const botonDeConfirmacionInterno = e.target.parentElement;
   
   let textoDeConfirmacion = botonDeConfirmacionInterno.querySelector('p').textContent;
   console.log(textoDeConfirmacion)
   
   confirmacion()
   }
});

function confirmacion(textoDeConfirmacion){
   let pic;
   if (textoDeConfirmacion =='NO CONFIRMADO'){
      pic = "./img/tilde ok.svg"
   }

   else{
      pic = "./img/tilde.svg"
   }
   document.getElementsByClassName('boton-tilde').src =pic;
}

console.log(confirmacion)



// const botonDeConfirmacion = document.querySelector('.boton-tilde')


// botonDeConfirmacion.addEventListener('click', cambiarColor)
// console.log(botonDeConfirmacion)

// let fotomostrada = "tilde.svg";

// function cambiarColor(){

//    let imagenConfirmacion = document.getElementById('.botonDeConfirmacionClase');

//    if(fotomostrada == "tilde.svg"){
//       botonDeConfirmacion.src = "./img/tilde ok.svg";
//       fotomostrada = "tilde ok.svg"
//    }
//    else{
//       botonDeConfirmacion.src = "./img/tilde.svg";
//       fotomostrada ="tilde.svg";
//    } 
// }



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
                     botonDeCrus.setAttribute('src','./img/crus.svg');
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

   
 
