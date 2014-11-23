(function() {
	var _in = document.getElementById('in'),
		out = document.getElementById('out'),
		ka = document.getElementById('ka'),
		kb = document.getElementById('kb'),
		alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
		
	_in.onkeypress = function() {
		var msg = _in.value,
			a = parseInt(ka.value),
			b = parseInt(kb.value);
			
		if (typeof a === "number" && typeof b === "number" && !isNaN(a) && !isNaN(b)) {
			var valid = [1,3,5,7,9,11,15,17,19,21,23,25];
			var isValid = false;
			for (var i = 0, l = valid.length; i < l; i++) {
				if (valid[i] === a) {
					isValid = true;
					break;
				}
			}
			if (isValid) {
				var substitution = alphabet.map(function(el) {
					return String.fromCharCode(((el.charCodeAt(0) - 65) * a + b) % 26 + 65);
				});
				msg = msg.toUpperCase().split('');
				for (i = 0, l = msg.length; i < l; i++) {
					for (var j = 0, m = substitution.length; j < m; j++) {
						if (msg[i] === substitution[j]) {
							msg[i] = alphabet[j];
							break;
						}
					}
				}
				msg = msg.join("");
			} else {
				msg = "<em>b</em> must be one of : 1,3,5,7,9,11,15,17,19,21,23,25";
			}
		} else {
			msg = "<em>a</em> and <em>b</em> must be valid numbers.";
		}
		out.innerHTML = msg;
	}
})();
