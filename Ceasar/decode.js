var _in = document.getElementById("in"),
    out = document.getElementById("out"),
    of = document.getElementById("of"),
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.assert(alphabet.length === 26);

_in.onkeypress = function() {
    var msg = _in.value;
        offset = parseInt(of.value);
    if (typeof offset === "number" && !isNaN(offset) && offset >= 1 && offset <= 25) {
        var ceasar = alphabet.map(function(el) {
            var c = String.fromCharCode(el.charCodeAt(0) + offset);
            return (c > 90) ? String.fromCharCode(91 - c + 65) : String.fromCharCode(c);
        });
        msg = msg.toUpperCase();
        for (var i = 0, l = msg.length; i < l; i++) {
            for (var j = 0, m = ceasar.length; j < m; j++) {
                if (msg[i] === ceasar[j]) {
                    msg[i] = alphabet[j];
                    break;
                }
            }
        }
    } else {
        msg = "You must provide a valid offset between 1 and 25.";
    }
    out.innerHTML = msg;
}
