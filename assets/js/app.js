var button = document.getElementById("button");

var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var inputResult = document.getElementById("inputResult");
var mathChoose = 'input[name="radioGroup"]';
var alertArea = document.getElementById("alertArea");

function cal(a, b){
	if (document.getElementById("mathPlus")){
		return a + b;
	}
	
	if (document.getElementById("mathMinus")){
		return a - b;
	}
			
	if (document.getElementById("mathMulti")){
		return a * b;
	}
	
	if (document.getElementById("mathDiv")){
		if (b == 0){
			return alertArea.value = "Vui lòng nhập số bị chia khác 0!"
		}
		return a/b;
	}
}


 function clickButton(){
	
	if (!number1.value || !number2.value) {
		alertArea.value = "Vui lòng nhập số vào ô trống";
		inputResult.value = "";
	} else alertArea.value = "";
	
	var a = Number(number1.value);
	var b = Number(number2.value);

	if (document.getElementById("mathPlus").checked){
		inputResult.value = a + b;
	}
	
	if (document.getElementById("mathMinus").checked){
		inputResult.value = a - b;
	}
	
	if (document.getElementById("mathMulti").checked){
		inputResult.value = a * b;
	}
	
	if (document.getElementById("mathDiv").checked){
		if (b === 0){
			return alertArea.value = "Vui lòng nhập số bị chia khác 0!"
		}
		inputResult.value = a / b;
	}
	
	if (!number1.value || !number2.value) {
		alertArea.value = "Vui lòng nhập số vào ô trống";
		inputResult.value = "";
	} else alertArea.value = "";
	
}