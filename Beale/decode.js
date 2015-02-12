var _in = document.getElementById("input"),
	_key = document.getElementById("key"),
	_out = document.getElementById("output");

_in.onkeypress = _key.onkeypress = function() {
	var msg = _in.value.split("-"),
	key = _key.value.toUpperCase().split("");
	function letters(el) {
		return (typeof el === "string" && el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90);
	}
	key = key.filter(letters);
	msg = msg.map(function(el) {
		return parseInt(el, 10);
	});
	if (key.length < msg.length) {
		_out.innerHTML = "The key must be at least as long as the message.";
		return;
	}
	for (var i = 0, l = msg.length; i < l; i++) {
		var c = msg[i],
			k = key[i].charCodeAt();
		msg[i] = String.fromCharCode(c^k); //XOR, order does not matter.
	}
	msg = msg.join("");
	_out.innerHTML = msg;
};
