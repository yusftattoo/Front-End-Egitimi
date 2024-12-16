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