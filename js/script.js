function init(){
//add your javascript between these two lines of code

var a = document.getElementsByTagName("h2")[0].innerHTML;
var b = document.getElementById("entryinput").value;

alert(a + ": " + b);
document.getElementById("textoutput").innerHTML = b;
}

window.addEventListener('load', init);