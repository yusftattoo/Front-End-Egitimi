//? liste içerisindeki id ye erişmek
var one = document.getElementById("walterwhite");
one.innerText = "Heisenbergggg";
one.style.color = "blue";


//? liste içerisindeki className'e erişmek
//? getElementsByClassName bize class’a sahip tüm öğeleri nodeList olarak döndürür.
var two  = document.getElementsByClassName("alternate");
for (var i = 0; i < two.length; i++) { 
    two[i].style.color  = "red"; 
}




// !chatcpt yaniti çalışıyor
//  // ID ile öğeye erişim ve değişiklik
//  function idDegistir() {
//     var one = document.getElementById("walterwhite");
//     one.style.color = "blue"; // Yazı rengi maviye değişir
//     one.innerText = "Heisenberg"; // İçerik "Heisenberg" olarak değiştirilir
//   }

//   // Class ile öğelere erişim ve değişiklik
//   function classDegistir() {
//     var two = document.getElementsByClassName("alternate");
//     for (var i = 0; i < two.length; i++) {
//       two[i].style.color = "red"; // Yazı rengi kırmızıya değişir
//       two[i].style.fontWeight = "bold"; // Yazı kalınlaştırılır
//     }
//   }

//   // Etiket adı ile öğelere erişim ve değişiklik
//   function etiketDegistir() {
//     var three = document.getElementsByTagName("li");
//     for (var i = 0; i < three.length; i++) {
//       three[i].style.backgroundColor = "lightgray"; // Arka plan rengi gri yapılır
//     }
//   }
