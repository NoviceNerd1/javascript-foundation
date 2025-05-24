
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
 button.addEventListener("click", function (superman) {
     	console.log(superman);
     	console.log(superman.target);
	body.style.backgroundColor= superman.target.id;
});
});









//function setBackgroundColor(color){
//	const body= document.querySelector('body')
//	body.style.backgroundColor=`${color}`
//}









//setBackgroundColor('red')
//const body= document.querySelector('body')
//console.log(body.style.backgroundColor="green")


