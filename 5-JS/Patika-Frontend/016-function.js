// Ders içeriği

// Funtion içerisinde diğer fun. çalıştır

function helloWorld() {
    console.log("Merhaba Worl.d.")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}


function userCheck() {
    if (userName && age >= 18) {
        info.innerHTML = "ehliyet alabilirsiniz"
    } else if (!userName) {
        info.innerHTML = "kullanıcı adınız yok"
    } else if ( !(age >= 18) ) {
        info.innerHTML = "Yas bilginiz yok veya 18 yaşından küçüksünüz."
    }
}


hello() //calistirir

// exmp.
function topla(){
    console.log(5+7);
}
topla();


function greetings(firstName="", lastName=""){  //default parametre alıyor.
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
    // burada firstName olarak tanımlı henüz bir default parametremiz yok, Yukarıda ="" ile  default parametre verilir
    // bu parametre aşağıda "apple" ile tanımlanmış olacak..
    // fonc içerisinde değişkene default parametre tannımlanmaz ise undefined hatasi verir
}
// şaun greeting in içerisine  buradan parametre gönderildi .(apple)
// İkinci "" ile lastname tanımlandı.
greetings("Apple", "Better")


// Metin içeriği
// İlk yazılmış hali.
// cube(3);
/* function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    console.log(sonuc);
} */

// elde edilene sonuc degerei, metodun ile tanimlandigi yere 
// return ile döndürülür ve metodun ilk tanımı cube(3)'e atanmış olur..
// cube(3)'ü başka bir yere çekip/eşitleyip değişken ile kullanabiliriz. 

let donenDeger =cube(3);
console.log(donenDeger);

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}


// ****************

// let donenDeger2 = cube2(4);
// kareAl(donenDeger2)

// function kareAl(sayi2){
//     let sonuc2 = sayi2*sayi2;
//     console.log(sonuc2);
// }

// function cube2(sayi2){
//     let sonuc2 = sayi2*sayi2*sayi2;
//     return sonuc2;
// }

// Examp 003. *************************

// function printScreen1 (){
//     console.log("İlk ekran çıktısı");
//         }

// function printScreen2 (){
//     setTimeout(function(){
//         console.log("İkinci ekran çıktısı");
//     }, 3000);
//         }

// function printScreen3 (){
//     console.log("Üçüncü ekran çıktısı");
//         }

// printScreen1();
// printScreen2();
// printScreen3();


// Examp 004

//     function printScreen1() {
//         console.log("İlk ekran çıktısı");
//     }

//     function printScreen2(callback1, callback2) {
//         setTimeout(function () {
//         callback1();
//         console.log("İkinci ekran çıktısı")
//         callback2();
//         }, 3000);
//     }

//     function printScreen3() {
//         console.log("Üçüncü ekran çıktısı");
//     }


//     printScreen2(printScreen1, printScreen3);

    // Examp 005

    // let yas = Number(prompt("yaşınızı giriniz:"));

    // kontrolEt(yas);

    
    // function kontrolEt(yas){
    //     if (yas>19) {
    //         console.log("Ehliyet alabilirsiniz.");
    //     } else {
    //         console.log("ehliyet alamazsınız.");
    //     }
    // }



    // Examp 006
    
    
    function mesajVer() {
        alert( 'Herkese Merhabalar!' );
    }
    mesajVer()
    //*****************************
    
    function mesaVer(ad, soyad) {
        alert(`Merhaba ${ad} ${soyad}`);
    }
    
    // Examp 006

    function topla(sayi1, sayi2) {
        return sayi1 + sayi2;
    };
    
    var sonuc = topla(10,20);

    // *******************************
    var ekle = function topla(sayi1, sayi2) {
        return sayi1 + sayi2;
    };
    
    var sonuc1 = ekle(10,20);
          