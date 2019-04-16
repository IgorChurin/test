var myImage = document.querySelector('img');

myImage.onclick = function() {        //функция смены картинки
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/header.png') {
      myImage.setAttribute ('src','images/medal-test.PNG');
    } else {
      myImage.setAttribute ('src','images/header.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {  // Установка имени пользователя
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Привет, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Привет, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
