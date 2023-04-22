$(document).ready(function(){
	contador ();
});
function contador(){
	setInterval (intervalo, 100);
	x = 0;
	var clases = $("*[data-valor]");
        function intervalo() {
        X++;
        for (var i = 0; i < clases.length; i++) {
        resultados = $(clases[i]) .attr('data-valor');
        if (x > resultados) { 
            continue;
        } else {
        }
        $(clases[i]). text (x);
	    }
	}
}