var printForm = function() {
  var box = document.getElementById("box");
  box.innerHTML =
  "Nom: " + document.getElementById("lastname").value + "<br>" + "Prénom: " + document.getElementById("firstname").value + "<br>" + "Age: " + document.getElementById("age").value + "<br>" + "Adresse: " + document.getElementById("addr").value + "<br>";
}
