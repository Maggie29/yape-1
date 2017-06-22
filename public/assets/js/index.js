'use strict';

const render = (root)=> {
  root.empty();
  const wrapper = $('<div class="wraper"></div>');

  const update = function(){
    render(root);
  };

  if(state.screen == null){
    wrapper.append(Welcome(update));
  }
  if(state.screen == 'Phonevalidation'){
    wrapper.append(Phonevalidation(update));
  }
  if(state.screen == 'EnterCode'){
    wrapper.append(EnterCode(update));
  }
  if(state.screen == 'CreateUser'){
    wrapper.append(CreateUser(update));
  }
  if(state.screen == 'UseYape'){
    wrapper.append(UseYape(update));
  }
  if(state.screen == 'CardRegister'){
    wrapper.append(CardRegister(update));
  }
  if(state.screen == 'KeyCard'){
    wrapper.append(KeyCard(update));
  }
  if(state.screen == 'Hello'){
    wrapper.append(Hello(update));
  }

  root.append(wrapper);
}

const state ={
screen: null,
code: null,
user: null,
data:null,
phone:null
}

$( _ => {

  const root = $('#root');
  render(root);
});
