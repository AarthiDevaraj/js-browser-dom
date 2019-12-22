//  reference to the body
var page = document.getElementsByTagName('body'); //  collection
console.log('Page (collection)', page);

//  reference to the div
var divRef = page[0].firstElementChild;
console.log('div', divRef);

//  reference to h1
var h1Ref = divRef.firstElementChild;
console.log('h1', h1Ref);

//  reference to the ul
var ulRef = h1Ref.nextElementSibling;
console.log('ul', ulRef);

//  reference to collection of li
var liCollection = ulRef.children;
console.log('li collection', liCollection);

//  reference to button
var buttonRef = ulRef.nextElementSibling;
console.log('Button', buttonRef);

//  adding click handler to button
buttonRef.addEventListener('click', function(e) {
  alert('Button click handled!');
});
