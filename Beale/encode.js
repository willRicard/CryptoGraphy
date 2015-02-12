var _in = document.getElementById("input"),
	_key = document.getElementById("key"),
	_out = document.getElementById("output");

_in.onkeypress = _key.onkeypress = function() {
	var msg = _in.value.toUpperCase().split(""),
	key = _key.value.toUpperCase().split("");
	console.log(key);
	function letters(el) {
		return (typeof el === "string" && el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90);
	}
	key = key.filter(letters);
	msg = msg.filter(letters);
	console.log(key, msg);
	if (key.length < msg.length) {
		_out.innerHTML = "The key must be at least as long as the message.";
		return;
	}
	for (var i = 0, l = msg.length; i < l; i++) {
		var n = msg[i].charCodeAt(0),
			m = key[i].charCodeAt(0);
		msg[i]= n^m;
	}
	msg = msg.join(" - ");
	_out.innerHTML = msg;
};
