"use strict";

var stock = prompt("Combien vous voulez ?");

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

var hasValidAdress = prompt("Adresse validée (true/false)");
var hasValidatedAgreement = prompt("Condition de vente validée (true/false)");

// afficher dans la console :
// -"commande en cours" si hasValidAdress et hasValidatedAgreement sont vrais
// -"vous devez renseigner une adresse" si hasValidAdress est faux
// -"vous devez cocher la case Condition de vente" si hasValidatedAgreement est faux
// -"Vous devez renseigner une adresse et cocher la case Condition de vente" si hasValidAdress et hasValidatedAgreement sont faux

if (hasValidAdress == true && hasValidatedAgreement == true) {
  console.log("Commande en cours");
} else if (hasValidAdress == false && hasValidatedAgreement == true) {
  console.log("Vous devez renseigner une adresse");
} else if (hasValidAdress == true && hasValidatedAgreement == false) {
  console.log("Vous devez cocher la case Condition de vente");
} else {
  console.log("Vous devez renseigner une adresse et cocher la case Condition de vente");
}
