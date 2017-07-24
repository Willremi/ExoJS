"use strict";

function result() {
  var name = document.getElementById("name").value;
  var agility = document.getElementById("agility").value;
  var force = document.getElementById("force").value;
  var endurance = document.getElementById("endurance").value;
  var total = parseInt(agility) + parseInt(force) + parseInt(endurance);

  document.getElementById("total").innerHTML = total;
  if(total !=100) {
    document.querySelector("#total1").innerHTML = "La somme des 3 caractéristiques ne fait pas 100";
  } else {
    document.querySelector("#total1").innerHTML = "Héros validé";
  }
}
