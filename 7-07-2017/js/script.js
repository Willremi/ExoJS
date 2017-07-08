var fizzBuzz = function(start, end, element) {
  var number1 = "";
  for (var i = start; i < end; i++) {
    if (i % 3 == 0) {
      number1 += "fizz";
    } else if (i % 5 == 0) {
      number1 += "buzz";
    } else {
      number1 += i;
    }

    if (i < end) number1 += ", ";
  }

  document.getElementById('result').innerHTML = number1;
}
