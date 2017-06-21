'use strict';
const render = (root)=> {
  root.empty();
  const wrapper = $('<div class="wraper"></div>');
  const update = function(){
    render(root);
  }
  if(state.screen == null){
    wrapper.append(Welcome(update));
  }
  if(state.screen == 'Phonevalidation')
  root.append(Phonevalidation(update));

  root.append(wrapper);
}

const state ={
screen : null,
}

$( _ => {

  const root = $('#root');
  render(root);
});
