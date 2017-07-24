"use strict";

function result() {
  var name = document.getElementById("name").value;
  var agility = document.getElementById("agility").value;
  var force = document.getElementById("force").value;
  var endurance = document.getElementById("endurance").value;
  var total = parseInt(agility) + parseInt(force) + parseInt(endurance);

  document.getElementById("total").innerHTML = total;
}
