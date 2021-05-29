var buttontranslate = document.querySelector("#btn-translate")
var textinput = document.querySelector("#txt-input")
var outputdiv = document.querySelector("#output");
 var serverURL = "https://api.funtranslations.com/translate/minion.json";   //Ye minion ka API hai jo net se mila hai
 function gettransationalURL(text){
    return serverURL + "?" + "text=" + text;
 }
 function errorhandler(error){
    console.log("error occured",error)
    alert("Try after sometime error occured")
 }
 function clickEventHandler (){
     var Inputtext = textinput.value;  //Input
     fetch(gettransationalURL(Inputtext))
     .then(response => response.json())     //Processing done by server
     .then(json => {
         var translatedtext = json.contents.translated;
         outputdiv.innerText = translatedtext;
     })
    .catch(errorhandler)
 }
buttontranslate.addEventListener("click", clickEventHandler)