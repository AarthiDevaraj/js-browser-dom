console.log(window.history);

document.getElementById('back').addEventListener('click', function() {
  alert('We are going back!');
  window.history.back();
});

document.getElementById('forward').addEventListener('click', function() {
  alert('We are going forward!');
  window.history.forward();
});
