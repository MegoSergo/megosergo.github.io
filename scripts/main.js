document.querySelector('img').onclick = function() {
  alert('Ай, ЗОЧЕМ ТЫКАЕШЬ!!!!!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Как твое имя кожаный?.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + 'Привет, это страница с котьими мемами';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Это страница с котьими мемами, привет ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}