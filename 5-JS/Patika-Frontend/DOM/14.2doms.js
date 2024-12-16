// ID ile öğeye erişim
var one = document.getElementById("walterwhite");

// Seçilen öğenin rengini değiştirme
one.style.color = "blue";

// Class ile öğelere erişim
var two = document.getElementsByClassName("alternate");

// Döngü yardımı ile sınıf öğelerinin rengini değiştirme
for (var i = 0; i < two.length; i++) {
  two[i].style.color = "red";
}
