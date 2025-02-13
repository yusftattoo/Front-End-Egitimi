//! Local Storage: 
//! Detayli aciklamalar enalt satırda.
//! https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


//! localStorage icerisine bilgi kaydetmek:
let email = "ysfkayabasi@gmail.com"
localStorage.setItem('userEmail', email) //! -> anahtar, deger yapisi kullanilir(key, value)

//! localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak: getItem ile cagiriyoruz
let localStorageEMailInfo = localStorage.getItem('userEmail') //! daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

//! localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') //! key bilgisini yazarak silebiliriz..






//! Web sayfasi uzerinde yapilan degisikliklerin veya form bilgilerinin kaydini tutar.
//! localStorage kayıtları zaman aşımı olmaksızın tutar.
//! sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır.
//! localStorage built-in fonksiyonlari ile veriler uzerinde islem yapilabilir.
//! setItem metodu kayit eklemek icin kullanilir.Bu metod "key" - "value" olarak iki parametre alir.
    // window.localStorage.setItem("key", "value");
    // daha önceden kullanilan anahtar yeniden kullanilmaz, kullanilirsa veriler eski anahtar uzerine yazilir.
//! verileri string biciminde kaydetmeliyiz - karmasik veri kaydetmek icin "toString()" ve uretilen deger kaydedilmelidir.
//! Json verisi kaydetmek icin JSON.stringify() kullanilir.
//! localStorage uzerinde kayitli anahtarli okumak icin getItem kullanilir. 
    // getItem metodu anahtar adini kendisine parametre olarak alip geriyedeger dondurmektedir.
    // window.localStorage.getItem("key");
    //  kayit edilmemis veri icin null degeri doner.
//! Veri Silmek : tum verileri silmek icin clear() metodu kullanilir.
    // localStorage.clear();
    //removeItem() istedigimiz bir veriyi silmek icin anahtar parametresi ile islem yapilir.
    // localStorage.romevItem("key");
//!
//!
//!