// var username = prompt("Give me username") -->input
// var welcomemessage = "This script works" + username -->processing
//alert(welcomemessage) -->output

var buttontranslate = document.querySelector("#btn-translate")
var textinput = document.querySelector("#txt-input")
var outputdiv = document.querySelector("#output");

 function clickEventHandler (){
     outputdiv.innerText = "askdksadaldaka " + textinput.value;
 }
buttontranslate.addEventListener("click", clickEventHandler)


