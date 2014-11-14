var _in = document.getElementById("in"),
out = document.getElementById("out");

_in.onkeypress = function() {
	var msg = _in.value;
	msg = msg.split("\n");
	var o = [];
	for (var i = 0, l = msg.length; i < l; i++) {
		o.push(String.fromCharCode(parseInt(msg[i], 2)));
	}
	o.join("\n");
	out.innerHTML = o;
}