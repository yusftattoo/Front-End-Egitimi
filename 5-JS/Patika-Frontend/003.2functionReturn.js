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

let donenDeger2 = cube2(4);
kareAl(donenDeger2)

function kareAl(sayi2){
    let sonuc2 = sayi2*sayi2;
    console.log(sonuc2);
}

function cube2(sayi2){
    let sonuc2 = sayi2*sayi2*sayi2;
    return sonuc2;
}

// Examp 003. *************************

function printScreen1 (){
    console.log("İlk ekran çıktısı");
        }

function printScreen2 (){
    setTimeout(function(){
        console.log("İkinci ekran çıktısı");
    }, 3000);
        }

function printScreen3 (){
    console.log("Üçüncü ekran çıktısı");
        }

printScreen1();
printScreen2();
printScreen3();


// Examp 004

    function printScreen1() {
        console.log("İlk ekran çıktısı");
    }

    function printScreen2(callback1, callback2) {
        setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
        }, 3000);
    }

    function printScreen3() {
        console.log("Üçüncü ekran çıktısı");
    }


    printScreen2(printScreen1, printScreen3);

    // Examp 005

    let yas = Number(prompt("yaşınızı giriniz:"));

    kontrolEt(yas);

    
    function kontrolEt(yas){
        if (yas>19) {
            console.log("Ehliyet alabilirsiniz.");
        } else {
            console.log("ehliyet alamazsınız.");
        }
    }