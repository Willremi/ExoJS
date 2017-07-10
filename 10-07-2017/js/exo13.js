var allGreen = function() {

  r2g();
  b2g();
}

var r2g = function() {
				var div = document.getElementsByClassName('red');
				for (i=0; i<div.length; i++) {
					div[i].style = 'background-color: green;';
				}
			}

			var b2g = function() {
				var div = document.getElementsByClassName('blue');
				for (i=0; i<div.length; i++) {
					div[i].style = 'background-color: green;';

				}
			}

			var reset = function() {
				var div = document.getElementsByTagName('div');
				for (i=0; i<div.length; i++) {
					div[i].style = '';
				}
			}
