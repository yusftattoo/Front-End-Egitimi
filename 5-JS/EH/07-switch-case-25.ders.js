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

// switch (sayi) {

//     case "1":
//         console.log("Sayiniz 1");
//         break;

//     case "2":
//         console.log("sayiniz 2");
//         break;

//     case "3":
//         console.log("sayiniz 3");
//         break;

//     default:
//         console.log("Girilen sayi 1-3 haricinde bir sayidir.");
//         break;
// }

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
// switch (sayi2) {

//     case "1":
//         console.log("Pazartesi Günü");
//         break;
//     case "2":
//         console.log("Sali Günü");
//         break;
//     case "3":
//         console.log("Carsamba Günü");
//         break;
//     case "4":
//         console.log("Persembe Günü");
//         break;
//     case "5":
//         console.log("Cuma Günü");
//         break;
//     case "6":
//         console.log("C.tesi Günü");
//         break;
//     case "7":
//         console.log("Pazar Günü");
//         break;
//     default:
//         console.log("Lutfen bir sayi giriniz.");
// }



//! 3. Examp ATM application

// let bakiye = 1000;
// let yeniSatir2 = "\r\n";


// let metin2 = "1- Bakiyenimi goruntule " + yeniSatir2
//     + "2-Para Cekme" + yeniSatir2
//     + "3-Para Yatirma" + yeniSatir2
//     + "4-Cikis Yap" + yeniSatir2
//     + "Lutfen bir islem numarası seciniz.";

// let secim = prompt(metin2);
// switch(secim) {
//     case "1" :
//         alert("Bakiyeniz: " + bakiye);
//         break;
    
//     case "2":
//         let cekilecekTutar =Number(prompt("Cekmek istediginiz tutari giriniz:"));
//         if (cekilecekTutar<bakiye){ //basarili
//             bakiye = bakiye -cekilecekTutar;
//             alert("Para cekme islemi gerceklesmistir." + yeniSatir2
//                 + "Cekim miktariniz: " + cekilecekTutar + "₺'dir." + yeniSatir2
//                 + "Kalan bakiyeniz: " + bakiye);
//         } else{ // cekilecek tutar bakiyeden fazlaysa / basarisiz
//             alert("Bakiyeniz yeterli degil!" + yeniSatir2
//                 + "Bakiyeniz: " + bakiye  +"₺'dir." );
//         }
//         break;
//     case "3":
//         let yatirilacakTutar = Number(prompt("Yatirilacak tutari giriniz: "));
//         bakiye = bakiye + yatirilacakTutar;
//         alert("Guncel bakiyeniz: " + bakiye + " ₺'dir.");
//         break;
//     case "4" :
//         alert("Hesabinizdan cikis yapilmistir.");
//         break;

//     default:
//         alert("Yapmak istediginiz islemi seciniz.");
//         break;

// }   


//! 5.Examp Score calculation

let turkceDogru , turkceYanlis =0;
let matematikDogru , matematikYanlis =0;
let sosyalDogru , sosyalYanlis =0;
let fenDogru , fenYanlis =0;
let puan = 0;
let oSYM = 100;

let yeniSatir3 = "\r\n";
let mesaj = "TYT Score Calculation" + yeniSatir3
    +"1- Puan Hesapla" +yeniSatir3
    +"2.Cikis Yap";

// alert(mesaj); burasi acilmiyor / ilk yazilirken kt icin yazildi.

let secim = prompt(mesaj);

switch(secim){
    case "1":
        turkceDogru =Number(prompt("Turkce dogru sayisi:"));
        turkceYanlis =Number(prompt("Turkce yanlis sayisi:"));
       
        matematikDogru =Number(prompt("Matematik dogru sayisi:"));
        matematikYanlis =Number(prompt("Matematik yanlis sayisi:"));
  
       sosyalDogru =Number(prompt("Sosyal dogru sayisi:"));
       sosyalYanlis =Number(prompt("Sosyal yanlis sayisi:"));
       
   
       fenDogru =Number(prompt("Fen dogru sayisi:"));
       fenYanlis =Number(prompt("Fen yanlis sayisi:"));

       okulPuani =Number(prompt("Okul puaninizi giriniz:"));

    let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
    let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
        // 4 yanlis bir dgruyu goturuyor.
    let kalanDogurSayisi = dogruSayisi - (yanlisSayisi/4)
        // her soru 4 puan olarak hesaplanirsa
    puan = (kalanDogurSayisi*4) + 100 + okulPuani;
    alert("TYT Score:" +puan);
        break;


    case "2":{

    }
        break;
}