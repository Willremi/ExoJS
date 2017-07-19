"use strict";

var stock = 100;

// afficher dans la console :
//-"stock indisponible" si le stock est à zéro
//- "stock en faible quantité" si le stock est plus petit que 50
//-"stock disponible" si le stock et plus grand ou égal à 50

if (stock == 0) {
  console.log("Stock indisponible");
} else if (stock >= 50) {
  console.log("Stock disponible");
} else {
  console.log("Stock en faible quantité");
}
