
var total = parseFloat(localStorage.getItem("total")) || 655;
document.getElementById("total").innerHTML = total;

function subtrairValor() {
	var valor = parseFloat(document.getElementById("valor").value);
	total -= valor;
	document.getElementById("total").innerHTML = total;
	localStorage.setItem("total", total);
}

function resetarValor() {
	total = 665;
	document.getElementById("total").innerHTML = total;
	localStorage.setItem("total", total);
}

