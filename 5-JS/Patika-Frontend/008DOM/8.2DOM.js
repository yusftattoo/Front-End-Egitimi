
document.addEventListener("click",function(){
    //! click event ı calistiginda function u calistir islem komutudur.
})

//!  *******  Arrow(FAT) Fonction da
//! document.addEventListener("click" , () => {
    //! buraya kod yazilir     })
    
    // 1. exm

let title = document.getElementById('title')
title.innerHTML = "Degisen bilgi"
console.log(title.innerHTML)

// 2. exm
let link = document.querySelector("ul#list>li>a")
link.innerHTML += "  - URL bilgisi eklendi"

// 2kullanım
let liink = document.querySelector("#kodluyoruzLink")
liink.innerHTML += "  - URL bilgisi eklendiii"


