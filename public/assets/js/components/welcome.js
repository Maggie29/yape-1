'use strict';
$(document).ready(_ => {
    $('.carousel').carousel();
  });

$('.carousel.carousel-slider').carousel({fullWidth: true});

const Welcome = (update) =>{
  const containerWelcome = $('<div class="container text-center"></div>');
  const slider = $('<div class="carousel carousel-slider center"></div>');
  const slide1 =$('<a class="carousel-item"><img src="assets/img/carousel/group-people.png" class="responsive-img"><h5 class="gray-dark">Gratis y Seguro</h5><p class="gray-soft">La transferencia es inmediata y gratuita de una cuenta a otra.</p></a>');
  const slide2 =$('<a class="carousel-item"><img src="assets/img/carousel/happy-person.png" class="responsive-img"><h5 class="gray-dark">Sin numero de cuenta</h5><p class="gray-soft">Elige a quién pagar desde tu lista de contactos.</p></a>');
  const slide3 =$('<a class="carousel-item"><img src="assets/img/carousel/icon-people.png" class="responsive-img"><h5 class="gray-dark">Paga a tus amigos</h5><p class="gray-soft">Paga a quien quieras dónde quieras, sin usar efectivo.</p></a>');

  const regButton =$('<a class="waves-effect waves-light btn" id="reg-button">Registrarme</a>');

slider.append(slide1);
slider.append(slide2);
slider.append(slide3);
containerWelcome.append(slider);
containerWelcome.append(regButton);

regButton.on('click', _ => {
  state.screen = 'Phonevalidation';
  update();
});

return containerWelcome;
}
