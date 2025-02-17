 //! Kelime sayisi bulma uygulamasi

//  let metin ="Suanda Turkiyede yasiyorum ve yazilim tutorial dersleri ile yazilim ogreniyorum";

//  let harf = prompt("Harfi yaziniz:");

//  let sonuc =bul(harf);
//  alert("Harf sayisi; "+sonuc);

//  function bul(harf){
//     let toplam = 0;
//     for(let i =0 ; i<metin.length; i++){
//         if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
//             toplam+=1;
//         }
//     }
//     return toplam;
//  }


 //! **** Mukemmel Sayi Bulma Aplic. ****


// let number1 = Number(prompt("Lütfen bir sayı yazın.")); //! Sayıyı Number'a çeviriyoruz.

// function isPerfectNumber(number1) {
//     let toplam1 = 0;
//          //! burada verilen i-i1 degerleri dinamik degerdir.
//     for (let i1 = 1; i1 <= number1 / 2; i1++) {  //! 1 dahil edilmeli ve i1 <= number1/2 olmalı
//         //! verilen number in yarisina kadar don, her seferinde birer arttiracak
//         if (number1 % i1 == 0) {  //! Sayının bölenlerini topluyoruz.
//             toplam1 += i1;
//         }
//     }

//     if (toplam1 == number1) {  //! Kendisi hariç bölenlerin toplamı kendisine eşit olmalı.
//         console.log(number1 + " mükemmel sayıdır.");
//     } else {
//         console.log(number1 + " mükemmel sayı değildir.");
//     }
// }

// isPerfectNumber(number1); //! Fonksiyonu çağırıyoruz.



//! Decimal to Binary Uygulamasi

convertDecimalToBinary(23);

function convertDecimalToBinary(number){
    let binary ="";
    while(true){
        binary += (number%2).toString();
        number=Math.floor(number/2);
        if(number == 1){
            binary += 1;
            break;
        }
    }

}

function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.lenght-1 ; i>0 ; i--){
        reverseBinary += binary.charAt(i);
    }
    return reverseBinary;
    }