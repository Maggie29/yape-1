'use strict';

const Welcome = () =>{
  const containerWelcome = $('<div class="container"></div>');
  const containerCarousel = $('<div class="container-carousel"></div>');
  const slider = $('<div class="carousel carousel-slider" id="slider"></div>');
  const slide1 =$('<a class="carousel-item" href="#one!"></a>');
    const img1 = $('<img src="assets/img/carousel/group-people.png" >');
    const divText1=$('<div class="text-carousel"></div>');
      const title1 =$('<h2 class="gray-dark">Gratis y Seguro</h2>');
      const p1 = $('<p class="gray-soft">La transferencia es inmediata y gratuita de una cuenta a otra.</p>');

  const button =$('<a class="waves-effect waves-light btn" id="reg-button">Registrarme</a>');
divText1.append(title1);
divText1.append(p1);
slide1.append(img1);
slide1.append(divText1);
slider.append(slide1);
containerCarousel.append(slider);
containerWelcome.append(containerCarousel);
containerWelcome.append(button);

button.on('click', _ => {
  state.screen = 'phonevalidation';
  update();
});

return containerWelcome;
};
