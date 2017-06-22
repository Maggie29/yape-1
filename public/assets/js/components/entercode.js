'use strict';
const EnterCode = (update) =>{
  const containerCode = $('<div class="container-phone center-align"></div>');
  const row = $('<div class="row"></div>');
  const imgCode = $('<div class="col s12"><img src="assets/img/icons/message.png" class="responsive-img img-icon" alt=""></div>');
  const divTxt= $('<div class="text"></div>');
  const title = $('<h5 class="gray-dark">Ahora ingresa tu código</h5>')
  const paragraph= $('<p class="gray-soft">Enviamos un SMS con el código de validación al número<span class="num-purple">'+state.user.data.phone+'</span></p>');
  const rowInput=$('<div class="row"></div>');
  const contentInput=$('<div class="col s12"></div>');
  const inputCode=$('<input type="text" maxlength="6" class="center-align validate" id="code">');
  const inputLabel=$('<label class="label-icon" for="code"><img src="assets/img/icons/lock.png"></label>');
  const timeCode =$('<span class="gray-soft">Reintentar en </span><img src="assets/img/icons/clock.png"><span>21</span>')
  const messageCode =$('<p class="num-purple">Código de Usuario:"+state.user.data.code+"</p>');
  divTxt.append(title);
  divTxt.append(paragraph);

  row.append(imgCode);
  row.append(divTxt);

  contentInput.append(inputCode);
  contentInput.append(inputLabel);
  rowInput.append(contentInput);

  containerCode.append(row);
  containerCode.append(rowInput);

  inputCode.on('keyup', (e) =>{
    console.log(inputCode.val());
    console.log(state.code);
    if(inputCode.val()==state.code){
      state.screen = CreateUser;
      update();
    }
  });

  return containerCode;
}
