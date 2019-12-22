var xhr = new XMLHttpRequest();

var data = {
  name: 'ABCD',
  city: 'New Delhi',
  country: 'India'
};

xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos');
xhr.setRequestHeader('X-Auth-A', 'Auth A Value');
xhr.setRequestHeader('X-Auth-B', 'Auth B Value');
xhr.setRequestHeader('X-Custom-A', 'Custom A Value');
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // for json payload
xhr.send(data);

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
