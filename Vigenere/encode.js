var _in = document.getElementById("input"),
	keyEl = document.getElementById("key"),
	out = document.getElementById("output");

_in.onkeypress = function() {
	var msg = _in.value.toUpperCase().split(""),
		key = keyEl.value.toUpperCase().split("");
	for (var i = 0, l = msg.length, k = key.length; i < l; i++) {
		if (msg[i].charCodeAt(0) >= 65 && msg[i].charCodeAt(0) <= 90)
		msg[i] = String.fromCharCode((msg[i].charCodeAt(0) - 65+ key[i % k].charCodeAt(0) - 65) % 26 + 65);
	}
	msg = msg.join("");
	out.innerHTML = msg;
};
