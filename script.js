var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    console.log('Ajax call failed', xhr.statusText);
  } else {
    var data = JSON.parse(xhr.response); //  response is string. parse it to json object
    console.log('Ajax request successful', data);
    document.getElementById('dump').textContent = JSON.stringify(data); //  stringify converts object to string
  }
};

xhr.onerror = function() {
  console.log('Request failed');
};
