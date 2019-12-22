var input = document.getElementById('input');
var button = document.getElementById('btn');
var cityList = document.getElementById('cityList');

button.addEventListener('click', function() {
  var cityName = input.value;

  if (cityName.length > 0) {
    for (let index = 0; index < cityList.children.length; index++) {
      if (cityList.children[index].innerText === cityName) {
        cityList.removeChild(cityList.children[index]);
      }
    }
  } else {
    alert('City is empty!');
  }
});
