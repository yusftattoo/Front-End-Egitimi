//! TUR DONUSUMLERI
//! object , function

//! String veri tipinden Number veri tipine donusturmek


let a = 5;
let be =Number("10");
console.log(a+b);

let c = Number(b);
console.log(typeof c); //! veri tipi consolda gorebiliriz.
console.log(a+c);


//! parseInt()

console.log(window);

let aa = 8;
let b = parseFloat("12.3"); //Tam olmayan sayilari da gosterir.
console.log(b);
console.log(typeof b);


//!NUMBER tipinden STRING veri tipine donusturmek

let x =String(55);
let y =(55).toString(); // tam sayi gosterir sadece
console.log(typeof x);
console.log(sonuc);

let ax = Number("B");
    // NaN yaniti verir. bir sayi olmadigi icin number a donmez.
console.log(a);

let rakamlar = [1,2,3,4]; //!object tipindedir.
let rakamlar2 = String([1,2,3,4]); //!object (Array )degeri stringe cevirdik
    // (Array) Number a cevrilmez. NaN verir 
console.log(typeof rakamlar, rakamlar2);
