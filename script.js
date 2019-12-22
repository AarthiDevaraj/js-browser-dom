var input = document.getElementById('input');
var button = document.getElementById('btn');
var cityList = document.getElementById('cityList');

button.addEventListener('click', function() {
  var cityName = input.value;

  if (cityName.length > 0) {
    var newLi = document.createElement('li'); //  create in memory element (blank li is created)
    var newTextNode = document.createTextNode(cityName); //  create the text node for this new li
    newLi.appendChild(newTextNode); //  add text to new li
    cityList.appendChild(newLi); //  append new li to ul
  } else {
    alert('City is empty! Cannot add!');
  }
});
