// var username = prompt("Give me username") -->input
// var welcomemessage = "This script works" + username -->processing
//alert(welcomemessage) -->output

var buttontranslate = document.querySelector("#btn-translate")
var textinput = document.querySelector("#txt-input")
 
buttontranslate.addEventListener("click", function clickEventHandler() {
    console.log("clicked")
    console.log("input",textinput.value)
})


