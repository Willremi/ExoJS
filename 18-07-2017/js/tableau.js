"use strict";

// Déclaration et initialisation d'un tableau vide
var myArray = [];
// Déclaration et initialisation d'un tableau avec 3 éléments
var myArray2 = [123, 42, 3.14, "Hello"];

// Inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// Ajout d'éléments dans un tableau
myArray.push(123);
myArray.push(42);
myArray.push(3.14);
myArray.push("Hello");

// Inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// Afficher la taille d'un tableau
console.log(myArray.length);

// Si le tableau contient au moins un élément,
// afficher le premier élément dans un tableau
if (myArray.length > 0) {
  console.log(myArray[0]);
}

// Si le tableau contient au moins un élément,
//afficher le dernier élément d'un tableau
if (myArray.length > 0) {
  console.log(myArray[myArray.length - 1]);
}

// Si le tableau contient au moins un élément,
//modifier le premier élément
if (myArray.length > 0) {
  myArray[0] = 1;
}

// Si le tableau contient au moins un élément,
//modifier le dernier élément
if (myArray.length > 0) {
  myArray[myArray.length - 1] = "Salut";
}

// Supprimer le deuxième élément (la valeur 42) d'un tableau
var index = 1
myArray.splice(index, 1);
console.log(myArray);

// Supprimer la valeur 3.14 du tableau
var index = 1
myArray.splice(index, 1);
console.log(myArray);
