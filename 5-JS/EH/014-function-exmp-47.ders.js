 //! Kelime sayisi bulma uygulamasi

 let metin ="Suanda Turkiyede yasiyorum ve yazilim tutorial dersleri ile yazilim ogreniyorum";

 let harf = prompt("Harfi yaziniz:");

 let sonuc =bul(harf);
 alert("Harf sayisi; "+sonuc);

 function bul(harf){
    let toplam = 0;
    for(let i =0 ; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
 }