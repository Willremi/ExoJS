"use strict";

// var stock = Math.floor(Math.random() * 101);
//
// // afficher dans la console :
// //-"stock indisponible" si le stock est à zéro
// //- "stock en faible quantité" si le stock est plus petit que 50
// //-"stock disponible" si le stock et plus grand ou égal à 50
//
// if (stock == 0) {
//   console.log("Stock indisponible car il y a " + stock);
// } else if (stock > 0 && stock >= 50) {
//   console.log("Stock disponible car il y a " + stock);
// } else {
//   console.log("Stock en faible quantité car il y a " + stock);
// }
//
// var hasValidAdress = true;
// var hasValidatedAgreement = true;
//
// // afficher dans la console :
// // -"commande en cours" si hasValidAdress et hasValidatedAgreement sont vrais
// // -"vous devez renseigner une adresse" si hasValidAdress est faux
// // -"vous devez cocher la case Condition de vente" si hasValidatedAgreement est faux
// // -"Vous devez renseigner une adresse et cocher la case Condition de vente" si hasValidAdress et hasValidatedAgreement sont faux
//
// if (hasValidAdress && hasValidatedAgreement) {
//   console.log("Commande en cours");
// } else if (!hasValidAdress) {
//   console.log("Vous devez renseigner une adresse");
// } else if (!hasValidatedAgreement) {
//   console.log("Vous devez cocher la case Condition de vente");
// } else {
//   console.log("Vous devez renseigner une adresse et cocher la case Condition de vente");
// }

// if (hasValidAdress == true && hasValidatedAgreement == true) {
//   console.log("Commande en cours");
// } else if (hasValidAdress == false && hasValidatedAgreement == true) {
//   console.log("Vous devez renseigner une adresse");
// } else if (hasValidatedAgreement == false && hasValidAdress == true) {
//   console.log("Vous devez cocher la case Condition de vente");
// } else {
//   console.log("Vous devez renseigner une adresse et cocher la case Condition de vente");
// }

// mini appli checklist vacance
// function testGet() {
//   var gas = document.getElementById("gas").checked;
//   console.log(gas);
//
//   var inputs = document.getElementsByTagName("input");
//   for(var input of inputs) {
//     console.log(input.checked);
//
//   }
//
//   var inputs = document.getElementsByClassName("checklist-item");
//   for(var input of inputs) {
//     console.log(input.checked);
//   }
//
//   var inputs = document.querySelectorAll("div label input.checklist-item");
//   for(var input of inputs) {
//     console.log(input.checked);
//   }
//
// }

function check() {
  var result = true;

  var inputs = document.querySelectorAll("div label input.checklist-item");

  for(var input of inputs) {
    if(!input.checked){
      result = false;
      break;
    }
  }

  if(result) {
    document.querySelector("#message").innerHTML = "Vous pouvez y aller";
  } else {
    document.querySelector("#message").innerHTML = "Attendez, il reste des choses à faire";
  }
}
