//  get reference to table
var tableRefCollection = document.getElementsByTagName('table'); //  collection
var tableRef = tableRefCollection[0];

var tableBodyRef = tableRef.lastElementChild;

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    console.log('Ajax call failed', xhr.statusText);
  } else {
    var data = JSON.parse(xhr.response); //  response is string. parse it to json object
    loadTable(data);
  }
};

xhr.onerror = function() {
  console.log('Request failed');
};

function loadTable(data) {
  for (let index = 0; index < data.length; index++) {
    var trElement = createTableRow(data[index]);
    tableBodyRef.appendChild(trElement);
  }
}

function createTableRow(line) {
  //  create tr element
  var newTr = document.createElement('tr');

  //  append tds to tr
  newTr.appendChild(createTableCell(line.id));
  newTr.appendChild(createTableCell(line.title));

  //  customizing the text for completed property
  if (line.completed) {
    newTr.appendChild(createTableCell('Yes'));
  } else {
    newTr.appendChild(createTableCell('No'));
  }

  //  return4
  return newTr;
}

function createTableCell(property) {
  //  create a new td element
  var newTd = document.createElement('td');

  //  create a new text node
  var newTextNode = document.createTextNode(property);

  //  append text node to newTd
  newTd.appendChild(newTextNode);

  //  return
  return newTd;
}
