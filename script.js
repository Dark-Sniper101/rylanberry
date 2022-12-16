document.querySelector("img").addEventListener("click", function(){
  window.location.href = "mes.html";
  window.alert("OUCH!");
})
var onOrOff = false;
function deezFunc(){
  if (onOrOff === false) {
    document.getElementById("deez").innerHTML = "and deez";
    onOrOff = true;
  } else if (onOrOff === true){
    document.getElementById("deez").innerHTML = "&nbsp;";
    onOrOff = false;
  }
  console.log("Deez txt is active(T or F):"+onOrOff);
}