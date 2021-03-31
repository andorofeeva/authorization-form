//Функция проверки браузера
function detectIE() {
	return window.navigator.userAgent.indexOf("MSIE") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
}

console.log(detectIE());

//Условия 
if (detectIE() === true) {
	alert("Вы используете не тот браузер");
} 
