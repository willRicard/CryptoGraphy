var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
offset = 0,
_in = document.getElementById("in"),
out = document.getElementById("out");
of = document.getElementById("of"),
btn = document.getElementById("btn");
alphabet = alphabet.split("");

btn.onclick = function() {
	offset = parseInt(of.value);
	if (offset <= 0 || offset >= 25) {
		out.innerHTML = "You ought to provide an offset between 1 and 25.";
		return;
	}
	var ceasar = alphabet.map(function(el) {
		var c = el.charCodeAt(0)+offset;
		return (c >= 91) ? String.fromCharCode(65+(91-c)) : String.fromCharCode(c);
	});
	var msg = _in.value.toUpperCase().split("");
	for (var i = 0, l = msg.length; i < l; i++) {
		for (var j = 0, m = alphabet.length; j < m; j++) {
			if (msg[i] == alphabet[j]) {
				msg[i] = ceasar[j];
				break;
			}
		}
	}
	msg = msg.join("");
	out.innerHTML = msg;
}