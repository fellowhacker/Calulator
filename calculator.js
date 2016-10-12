
		function plus() {
			document.calculator.display.value += "+";
		}
		function minus() {
			document.calculator.display.value += "-";
		}
		function mul() {
			document.calculator.display.value += "*";
		}
		function div() {
			document.calculator.display.value += "/";
		}
		function mod() {
			document.calculator.display.value += "%";
		}
		function dot() {
			document.calculator.display.value += ".";
		}
		function clear() {
			document.calculator.display.value += "0";
		}
		function valu(a){
			document.calculator.display.value += "7";
		}
		function equal() {
			document.calculator.display.value = eval(document.calculator.display.value);
			//document.calculator.display.style.text-align = "right";
		}

