console.log(window.location);

var buttonRefs = document.getElementsByTagName('button');

buttonRefs[0].addEventListener('click', function() {
  // window.location.href = 'http://google.co.in';  //  This too works
  window.location.assign('http://google.co.in');
});
