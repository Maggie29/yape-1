'use strict';
const render = (root)=> {
  root.empty();
  const wrapper = $('<div class="wraper"></div>');

  wrapper.append(Welcome());

  root.append(wrapper);
};

const state ={
screen : screen,
}

$( _ => {

  const root = $('.root');
  render(root);
});
