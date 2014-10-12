var alphabet	= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ceasar		= "DEFGHIJKLMNOPQRSTUVWXYZABC";
alphabet	= alphabet.split("");
ceasar		= ceasar.split("");

var input = document.getElementById("input");
var output = document.getElementById("output");
input.onkeypress = function() {
	var msg = input.value.toUpperCase().split("");
	for (var i = 0, l = msg.length; i < l; i++) {
		for (var j = 0, m = alphabet.length; j < m; j++) {
			if (msg[i] == alphabet[j]) {
				msg[i] = ceasar[j];
				break;
			}
		}
	}
	msg = msg.join("");
	output.innerHTML = msg;
}
