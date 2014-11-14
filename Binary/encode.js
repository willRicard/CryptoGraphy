var input = document.getElementById("input");
var output = document.getElementById("output");

input.onkeypress = function() {
	var msg = input.value;
	msg = msg.toUpperCase().split("");
	msg = msg.map(function(el) {
		return el.charCodeAt(0).toString(2); //Convert ASCII code to binary.
	});
	msg = msg.join("\n");
	output.innerHTML = msg;
}
