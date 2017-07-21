"use strict";

var data = [
  {
    id: 123,
    name: "user 1",
    scores : [42, 100, 54, 65, 32]
  },
  {
    id: 243,
    name: "user 2",
    scores : [76, 64, 10, 67, 64]
  },
  {
    id: 768,
    name: "user 3",
    scores : [93, 2, 56, 78, 100]
  }
];

// Intégrer Bootstrap

// à partir de ces données :
//  - afficher un tableau html contenant le nom des utilisateurs et leurs scores, triés par nom d'utilisateur
//  - afficher un tableau html contenant le nom des utilisateurs et leur score moyen, triés par nom d'utilisateur
//  - afficher un tableau html contenant les 5 meilleurs scores et le nom de l'utilisateurs et la position du score, triés par ordre décroissant,puis par nom de user

// Indice :
// - vous pouvez parcourir le tableau de données avec une boucle for (avec index, for in, for of)
// - pour lire le nom : user.name
// - pour lire tableau de scores : user.scores

// exemple de création de code html et d'injection du code dans un élément

// var data = [];
// var html = "";
//
// html += "<table>";
// for(var i = 0; i < data.length; i++) {
//   html += "<tr>";
//   html += "<td>" + data[i] + "</td>";
//   html += "</tr>";
// }
//
// html += "</table>";
//
// document.querySelector("#id-balise-html").innerHTML = html;
var html = "";

html += "<table>";

    html += "<thead>";
    html += "<tr>";
    // html += "<th>ID</th>";
    html += "<th>Names</th>";
    html += "<th>Scores</th>";
    html += "</tr>";
    html += "</thead>";

    html += "<tbody>";
    for(var i = 0; i < data.length; i++) {
      html += "<tr>";
      // html += "<td>" + data[i].id + "</td>";
      html += "<td>" + data[i].name + "</td>";
      html += "<td>" + data[i].scores + "</td>";
      html += "</tr>"
    }
    html += "</tbody>";

html += "</table>";

document.querySelector("#listAll").innerHTML = html;

var somme1 = 0;

for(var j = 0; j < (data[0].scores).length; j++) {
  somme1 += data[0].scores[j];
  var moyenne1 = somme1 / (data[0].scores).length;
}

console.log(moyenne1);

var somme2 = 0;

for(var j = 0; j < (data[1].scores).length; j++) {
  somme2 += data[1].scores[j];
  var moyenne2 = somme2 / (data[1].scores).length;
}

console.log(moyenne2);

var somme3 = 0;

for(var j = 0; j < (data[2].scores).length; j++) {
  somme3 += data[2].scores[j];
  var moyenne3 = somme3 / (data[2].scores).length;
}

console.log(moyenne3);

data[0].scores = moyenne1;
data[1].scores = moyenne2;
data[2].scores = moyenne3;

var html = "";

html += "<table>";

    html += "<thead>";
    html += "<tr>";
    // html += "<th>ID</th>";
    html += "<th>Names</th>";
    html += "<th>Scores</th>";
    html += "</tr>";
    html += "</thead>";

    html += "<tbody>";
    for(var i = 0; i < data.length; i++) {
      html += "<tr>";
      // html += "<td>" + data[i].id + "</td>";
      html += "<td>" + data[i].name + "</td>";
      html += "<td>" + data[i].scores + "</td>";
      html += "</tr>"
    }
    html += "</tbody>";

html += "</table>";

document.querySelector("#listAverage").innerHTML = html;
