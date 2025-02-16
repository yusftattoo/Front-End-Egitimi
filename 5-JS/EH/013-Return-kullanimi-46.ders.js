//!  ********************** RETURN **************
//! Bir degeri metodun diarasina cikartmak yeniden kullanma islemini saglar
//! Bir metodu bitiren anahtar kelimedir.
//!  ayni blog icerisinde return anahtar kelimesi sonrasinda yazilan kodlar calismaz


let donenDeger  = cube(3);
console.log(donenDeger);

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}

//! yukaridaki islemi farkli parametre ile return u kullanilarak yapilacak.
//! yukaridaki kod un aynisi yapilir ve elde edilen sonuc farkli parametre 
    //! ile karaAl icerisine tanimlanir karaAl ile ek bir islem yapilir.
    //// **********************************************************


    
//! return ile alinan deger burada farkli parametreye eklendi
let donenDeger1 = cube(2);
kareAl1(donenDeger1);

//! karaAl ile gelen yeni sayinin karesinin alinma islemi yapildi
function kareAl1(sayi2){
    let sonuc3 = sayi2*sayi2;
    console.log(sonuc3);
}

function cube(sayi1){
    let sonuc1 = sayi1*sayi1*sayi1;
    return sonuc1;
}


//! ********** GEriye deger dondurmeyen metod **************

yazdir();

function yazdir(){
    console.log("Yusuf, geriye deger dondormeyen metod : void");
}