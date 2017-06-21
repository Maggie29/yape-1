'use strict';
const Phonevalidation = () =>{
  const containerPhone = $('<div class="container-phone"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12"></div>');
  const imgPhone = $('<img src="assets/img/phone.png" class="responsive-img img-icon" alt="">');
  const divTxt= $('<div class="text"></div>');
  const h5 = $('<h5 class="gray-dark">Para comenzar validemos tu número</h5>');
  const p = $('<p class="gray-soft">Recibirás un SMS con un código de validación</p>');
  const inputPhone = $('<input type="tel" name="" value="" placeholder="">');

  divTxt.append(h5);
  divTxt.append(p);
  col.append(imgPhone);
  row.append(divTxt);
  row.append(col);
  containerPhone.append(row);

  return containerPhone;

}
