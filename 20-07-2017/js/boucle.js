"use strict";

var myArray = [123, 42, 3.14, 100, 1, -2];

// Boucle avec for avec un index
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Boucle for en commençant par la fin
// Indice : i-- enlève 1
for(var i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

//boucle for in
for (var i in myArray) {
  console.log(myArray[i]);
}

//boucle for of
for (var value of myArray) {
  console.log(value);
}

//afficher les nombres compris entre 0 à 50
for (var i in myArray) {
  if(myArray[i] > 0 && myArray[i] < 50) {
    console.log(myArray[i]);
  }
}
//afficher les nombres supérieurs de 50
for (var i in myArray) {
  if(myArray[i] > 50) {
    console.log(myArray[i]);
  }
}

//afficher les nombres décimaux
for (var value of myArray) {
  if (typeof value == 'number' && !Number.isInteger(value)) {
    console.log(value);
  }
}

//afficher les nombres décimaux (méthode alternative)
for (var value of myArray) {
  if (typeof value == 'number' && value - Math.round(value) != 0) {
    console.log(value);
  }
}
