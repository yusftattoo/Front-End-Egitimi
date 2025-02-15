// metotlar yazilan kod lari baska bir alanda tekrar yazmaya gerek kalmadan cagirarak kullanmaya yarar.
// 1. Parametresiz metotlar.


function yazdir (){
    console.log(7+6);
}
 yazdir();

// ! kodu nereden cagirdimiz onemli degil fakat senkronizeli 
    // ! calisma islemlerinde nereden cagirdigimiz onemlidir. 
//! 2. Paramereli metotlar

function yazdirma(isim, soyisim){
    console.log(isim + " " + soyisim);
}
yazdirma("yusuf", "kayabsi");

// ! asagıda senkronizeli islem mevcuttur.
// ! önce kullanıcdan bilgi aliyoruz sonra alinan bilgiyi isley ip kullaniyoruz.


