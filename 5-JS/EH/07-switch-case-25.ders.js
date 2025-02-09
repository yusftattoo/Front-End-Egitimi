let deger = (3)
switch (deger) {
    case 1: //deger ile case 'in onundeki 1 aynı ise bu kod blogu calisir.
        //kod blogu
        break; //kod blogunu sonlandırır

    case 2:
        //kod blogu
        break;

    case 3:
        //kod blogu
        break;

    default:
        //kod blogu
        break;
}

//! 1.EXAMP Sayi Secme uygulamasi

// let sayi = prompt("lütfen 1-3 arasinda bir sayi giriniz:");

switch (sayi) {

    case "1":
        console.log("Sayiniz 1");
        break;

    case "2":
        console.log("sayiniz 2");
        break;

    case "3":
        console.log("sayiniz 3");
        break;

    default:
        console.log("Girilen sayi 1-3 haricinde bir sayidir.");
        break;
}

//! 2.EXAMP Haftanin Gunleri

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Sali" + yeniSatir
    + "3-Carsamba" + yeniSatir
    + "4-Persembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "6-Cum.tesi" + yeniSatir
    + "7-Pazar"+yeniSatir
    + "lütfen gun seciniz:";

// let sayi2 = prompt(metin);
switch (sayi2) {

    case "1":
        console.log("Pazartesi Günü");
        break;
    case "2":
        console.log("Sali Günü");
        break;
    case "3":
        console.log("Carsamba Günü");
        break;
    case "4":
        console.log("Persembe Günü");
        break;
    case "5":
        console.log("Cuma Günü");
        break;
    case "6":
        console.log("C.tesi Günü");
        break;
    case "7":
        console.log("Pazar Günü");
        break;
    default:
        console.log("Lutfen bir sayi giriniz.");
}

