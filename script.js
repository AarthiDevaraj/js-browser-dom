fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json));

var headerElement = document.getElementById('header');
headerElement.textContent = 'Another header!!!';
