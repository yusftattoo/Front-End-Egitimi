//  ****************    Coklu kosul yapisi kullanimi    ************



let userName = prompt("Kullanici adiniz:" )
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if(userName && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz"
} else if ( !userName) {
    info.innerHTML = "Kullanici adiniz yok!!!"
} else if ( !(age >= 18) ) {
    info.innerHTML = "18 yasindan kucuksunuz"
}

// ********************

// let vkiHesapla = prompt ("Lutfen kilonuzu giriniz:")

// function vkiHesapla(weight, height) {
//     var vki; //Bu kod satırını değiştiriniz
//   if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
//   if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
//   if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
//   if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
//   return alert("Girdiğiniz değerleri kontrol ediniz");
//   };
//   vkiHesapla(weight, height);


// ************* Ternary operator ile if kulklanımı ***********

let userNamee = prompt("Kullani bilginizi yaziniz.")
let infoo = document.querySelector("#infoo")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

//  userName.length > 0 ? userName: "Kullanici adiniz bulunamadi : ("

infoo.innerHTML =`${ userNamee ? userNamee: "Kullanici adiniz bulunamadi : ("}`