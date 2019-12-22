//  DOM events: https://developer.mozilla.org/en-US/docs/Web/Events

//  simple property assignment
//  only one listener is possible
var buttonProperty = document.getElementById('btn-property'); //  get the reference to the button
buttonProperty.onclick = function(e) {
  console.log('Property Button Click handler', e);
};

//  Other style: adding the event listener
//  multiple listeners are possible
var buttonListener = document.getElementById('btn-listener'); //  get the reference to the button
buttonListener.addEventListener('click', function(e) {
  console.log('Listener Button Click handler 1', e);
});

buttonListener.addEventListener('click', function(e) {
  console.log('Listener Button Click handler 2', e);
});
