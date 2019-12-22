var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    console.log('Ajax call failed', xhr.statusText);
  } else {
    console.log('Ajax request successful', xhr.response);
  }
};

xhr.onerror = function() {
  console.log('Request failed');
};
