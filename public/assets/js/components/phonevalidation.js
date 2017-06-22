'use strict';

const Phonevalidation = (update) =>{
  const containerPhone = $('<div class="container-phone center-align"></div>');
  const row = $('<div class="row"></div>');
  const imgPhone = $('<div class="col s12"><img src="assets/img/icons/phone.png" class="responsive-img img-icon" alt=""></div>');
  const divTxt= $('<div class="text"></div>');
  const title = $('<h5 class="gray-dark">Para comenzar validemos tu número</h5>')
  const paragraph= $('<p class="gray-soft">Recibirás un SMS con un código de validación</p>');
  const inputContainer =$('<div class="col s12 input-field"></div>');
  const inputPhone = $('<input type="tel" id="phone" maxlength="9" class="center-align validate">');
  const labelInput = $('<label class="label-icon" for="phone"><img src="assets/img/icons/phoneandnumber.png" width=40%/></label>');
  const checkboxContainer =$('<div class=col 12></div>')
  const checkbox = $('<input type="checkbox" id="terms" class="filled-in" required>');
  const label = $('<label for="terms">Acepto los <a href="#">Términos y condiciones.</a></label>');
  const message =$('<span class="message"></span>');
  const continueButton =$('<a class="waves-effect waves-light btn disabled" id="continue">Continuar</a>')

  divTxt.append(title);
  divTxt.append(paragraph);

  row.append(imgPhone);
  row.append(divTxt);

  inputContainer.append(inputPhone, labelInput);
  checkboxContainer.append(checkbox, label);
  containerPhone.append(row);
  containerPhone.append(inputContainer);
  containerPhone.append(checkboxContainer);
  containerPhone.append(message);
  containerPhone.append(continueButton);

  inputPhone.on({
    keyup:function() {
      if(inputPhone.val().charAt(0)==9){
        message.text("");
      }else{
        message.text("Su número debe comenzar con 9");
        return false;
        }
      },
      keypress: function(e){
        if(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode ===8){
          message.text("");
        }else{
          message.text("Solo debe ingresar números");
          return false;
        }
      }
  });

  checkbox.on('click', (e) =>{
    const inputValue = (valor)=>{
    if( $(valor).prop('checked')){
      return $('#continue').removeClass("disabled");
    }else {
      return $('#continue').addClass("disabled");
    };
   };
  });

  continueButton.on('click', () =>{
    if(inputPhone.val().length==9){
      registerNumber(inputPhone.val(), true, message, update);
    }else {
      message.text("Invalido, debe ingresar 9 números");
    }
  });

  return containerPhone;
};

const registerNumber = (update, phone, terms, message) =>{
  $.post("api/RegisterNumber", {
    phone: phone,
    terms: terms
  }, function(result){
     if(result.data == null){
       message.text(result.message);
     }else {
       state.screen = EnterCode;
       state.user = result;
       update()
     }
  });
};
