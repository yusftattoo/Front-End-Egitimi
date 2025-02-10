const button = document.querySelector("#button");

button.addEventListener("dblclick", clickFonksiyonu);

function clickFonksiyonu() {
    document.getElementById("text").innerHTML = "NEW FORM";
}
