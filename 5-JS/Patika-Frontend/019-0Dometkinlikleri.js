// DOM etkinlikleri 
// https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick )
    //! function(){   console.log("tiklandi")}
    //!sürekli iceriden mudahale etmemek icin disaridan fun acip guncellemeleri tek bir kaynak uzerinden yenilemesi icin 

 function domClick() { //! fun ile  domClick üzerinden erisim saglandı.
    // console.log("tiklandi") //! yapilmasini istediğimiz islemi events ler arasından seciyoruz.
    // console.log(this) //! ile hangi ekranda islem yapildini görebiliriz
    console.log(this.innerHTML = "tiklandi ve bilgi degisti") //! hangi paragraf uzerinde islem yapildini görebiliriz v degisikliyapbiliriz.
    console.log(this.style.color == "red" ? this.style.color = "black" : this.style.color = "red") 
    //! tiklandiginda kirmizi olur.
 }
//! buradaki islem genel bir dinleme islemidir ve dinleme isleminde degisikler style gibi bir cok islem yapılabilir.