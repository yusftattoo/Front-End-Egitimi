//! ******** 3 Farkli if yapisi ********
//! ******** Kosul Yapilari   IF / ELSE --  IF  &  ELSE --- IF & IF  Pratikler  ************

//! *******     1.Examp

// let not = 25;

// if(not>50){
//     console.log("Basarili. Not:" + not);
//! verilen kosul calısmazsa else calisacak
// } else{
//     console.log("Basarisiz. Not:" + not);
// }


//! ********    2.Examp

// let yas = Number(prompt("Yasiniz:"));
// console.log( yas);
// let para = Number(prompt("Bütçeniz"));

// if(yas > 17 && para >2000){
//     alert("Ehliyet alabilirisiniz.");
// } else {
//     alert("Ehliyet alinamaz..");
// }


//! *******    3.Examp

// let vize1 = Number(prompt("Vize 1 Notunuzu  giriniz:"));
// let vize2 = Number(prompt("Vize 2 Notunuzu  giriniz:"));
// let final = Number(prompt("Final Notunuzu  giriniz:"));

// let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

// if(ortalama>=60){
//     alert("Dersten gectiniz :) " + ortalama);
//     console.log("Dersten gectiniz :)" , ortalama);
// }else {
//     alert("Kaldiniz :( ") + ortalama;
//     console.log("Kaldiniz :( " , ortalama);
// }

//! *******    4.Examp
// let secilenYol = prompt("1-2-3 tercihleri arasindan bir yol seciniz.");

// if(secilenYol == 1){
//     alert("Sectiginiz yol " + secilenYol + "Numarali yoldur.");
// } else if(secilenYol ==2){
//     alert("Secitiginiz yol" + secilenYol + "numarali yoldur.");
// } else if(secilenYol ==3){
//     alert("Sectiginiz yol " + secilenYol + "numarali yoldur");
// } else {
//     alert("Gecersiz bir yol sectiniz.")
// }


//! ****** IF & IF *****
//!  birden fazla kosulu gerceklestirebilr. Birden fazla bilgi talep edilmesi gibi durumlarda kullanilir.
//!  ad / soyad / şifre / mail / tckn gibi birden fazla bilgi onaylama islemleri icin
//! if if kosulunda eger bir if saglanmıyor ve diger if calismasini istemiyorsak " return; ile kodun calismasini durdurabiliriz.

//! *******    5.Examp  
// let ad = prompt("Adinizi yaziniz:");
// let tckn = prompt("TCKN yaziniz:");

// kontrolEt(ad, tckn); //! burada yazilen kontroEt metottur. metot yazilir ve alt tarafta tanimlanarak kullanilir.
// kontrolEt2(ad, tckn);

// function kontrolEt(ad, tckn){
//     if(ad != ""){ 
         //! / != "" yazilmasini nedeni adınız boşdeğilse , yani bir ad yazildiysa asagidak kosullar calissin.
        //! eger ad bos ise en alttaki else calisir.
//         if(tckn.length ==11){
//             console.log("Isim ve TCKn dogru..");
//         }else{
//             console.log("Lütfen tckn 11 karakter olarak dogru yaziniz.");
//         }
//     }else{
//         console.log("Lütfen isim alanını bos birakmayiniz.");
//     }

// }


//! if if if ile aynı ornegin yazilmasi

// function kontrolEt2(ad, tckn){
//     if  (ad==""){
//         console.log("Isim alanini bos birakmayiniz.!!");
//         return;
//     }
//     if  (tckn.length!=11){
//         console.log("Lutfen tckn'nizi 11 karater olarak yaziniz..!");
//         return;
//     }
//     console.log("Isim ve tckn alani onaylandi..");
// }


//! ********* 6.Examp *** Beden Kitle Endeksi Uygulamasi

// let kilo = Number(prompt("Kilonuzu giriniz"));

// let boy = Number(prompt("Boyunuzu CM cinsinden yaziniz."));

// let sonuc = kilo/(boy*2);
// if(sonuc<18.5){
//     console.log("Ideal kilonun altindasiniz. Hesaplanan  Kilonuz:" + sonuc)
// }else if (sonuc>18.9 && sonuc<=24.9){
//     console.log("Ideal kilodasiniz. Hesaplanan  Kilonuz:" + sonuc)
// }else if(sonuc>25 && sonuc<=29.9){
//     console.log("Ideal kilonun uzerindesiniz. Hesaplanan  Kilonuz:" + sonuc)
// }else if(sonuc>30 && sonuc<=39.9){
//     console.log("Ideal kilonun çok ustundesiniz. Hesaplanan  Kilonuz:" + sonuc)
// }else if(sonuc=>40 ){
//     console.log("Ideal kilonun çok ustundesiniz(morbi obez). Hesaplanan  Kilonuz:" + sonuc)
// }


//! ********  7.Examp *** Benzin istasyonu yakit Hesaplama ****
//! prompt içerisinde satir olusturmak için "\r\n"; tanimlamasi yapildi..

let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakit turunuzu seciniz.";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
    let yakitLitresi = Number(prompt("Yakit Litresi giriniz."));
    let bakiye = Number(prompt("Bakiyenizi giriniz."))


    if(yakitTipi=="1"){
        let odenecekTutar = dizel*yakitLitresi;
        if(odenecekTutar<=bakiye){ //bakiye yeterli 
            console.log("Odeme islemi gerceklesti." +yeniSatir
            +"Kalan bakiyeniz:" + (bakiye-odenecekTutar));
        }else if(odenecekTutar>bakiye){ //bakiye yetersiz 
            console.log("Bakiyeniz yeterli degil." +yeniSatir
            +"Ödenecek tutar : "+odenecekTutar +yeniSatir
            +"Mevut Bakiyeniz : " +bakiye +yeniSatir
            +"Eksik Tutar : "+(odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="2"){
        let odenecekTutar = benzin*yakitLitresi;
        if(odenecekTutar<=bakiye){ // bakiye yeterli
            console.log("Odeme islemi gerceklesti." +yeniSatir
            +"Kalan bakiyeniz: " +(bakiye-odenecekTutar));
        }else if(odenecekTutar>bakiye){ //bakiye yetersiz 
            console.log("Bakiyeniz yeterli degil" +yeniSatir
            +"Odenecek Tutar: " + odenecekTutar +yeniSatir
            +"Mevut Bakiyeniz: " + bakiye +yeniSatir
            +"Eksik Tutar: " +(odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="3"){
        let odenecekTutar = lpg*yakitLitresi;
        if(odenecekTutar<=bakiye){ // bakiye yeterli
            console.log("Odeme islemi gerceklesti." +yeniSatir
            +"Kalan bakiyeniz: " +(bakiye - odenecekTutar));
        }else if(odenecekTutar>bakiye){ // bakiye yetersiz
            console.log("Bakiyeniz Yeterli degil" +yeniSatir
            +"Odenecek tutar: " +odenecekTutar +yeniSatir
            +"Mevut Bakiyeniz: " +bakiye +yeniSatir
            +"Eksik miktar : " +(odenecekTutar-bakiye));
        }
    }
}
else{
    console.log("HATA!! Lütfen gecerli bir yakit turu seciniz.")
    alert("HATA!! Lütfen gecerli bir yakit turu seciniz.")
}
