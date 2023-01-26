const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

//const couponsObj = {
  //'JuanDC_es_Batman': 30,
  //'Chichon': 15,
//};

const couponsList = [];

  couponsList.push({
    name:'JuanDC_es_Batman',
    discount: 30,
  });

  couponsList.push({
    name:'chicho',
    discount: 20,
  });

  couponsList.push({
    name:'vale',
    discount: 10,
  });


function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  
  let discount;

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray);

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'El cupón no es válido';
     return;
  }

  
  //if (couponsObj[coupon]) {
   // discount = couponsObj [coupon];
  //} else {
   // pResult.innerText = 'El cupón no es válido';
 // }

 // switch (coupon) {
    //case 'JuanDC_es_Batman':
     // discount = 30;
     // break;
   // case 'no_le_digas_a_nadie':
     // discount = 25;
     // break;
    //default:
     //pResult.innerText = 'El cupón no es válido';
     // return;
 // }
  
  // if (coupon == 'JuanDC_es_Batman') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
