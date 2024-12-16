// Son ögeye erişim

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son ogeyi degistir...."

// İlk ögeye erisim
let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk ogeye erisim...."


// Yeni öge ekleme
// listeye erişip liste içerisine yeni bir eleman elklenecek

let ulDOM = document.querySelector("ul#list")
// bir li elemeneti oluşturulacak
let liDOM = document.createElement('li')
// Dom oluşturulmuş oluyor dom oluştuktan sonra 
liDOM.innerHTML = "kendi ols. oge"

// ekrana verebilmek için apended-prepend yapılmalı. ögeyi nereye ekleneceği seçilir.

// en sona ekliyor
// ulDOM.append(liDOM) 
//! ikisinden biri çalışır sadece
 //ilk başa öge ekler
 ulDOM.prepend(liDOM)

