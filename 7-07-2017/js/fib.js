var str = "";

var fibonacci = function(first, second, limit) {
  let sum;
  for (var i = 0; i < limit; i++) {
    sum = first + second;

    str += i + " => " + sum + "\r\n";

    first = second;
    second = sum;
  }

  console.log(str);

  return sum;
};

var printRabbits = function(count) {
  console.log("Print " + count + " rabbits");

  for (var i = 0; i < count; i++) {
    let rabbitImg = document.createElement("img");
    rabbitImg.src = "img/rabbit.jpg";
    rabbitImg.style.position = "absolute";
    rabbitImg.style.left = (Math.random() * 100) + "%";
    rabbitImg.style.top = (Math.random() * 100) + "%";
    document.body.appendChild(rabbitImg);
  }
};
