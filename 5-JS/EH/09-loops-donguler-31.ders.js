//! *******************  DONGULER -- LOOPS

// for(degisken ; kosul ; arttırma-azaltma){ 
// kodlar                                  }
// kosul; büyükse - kucukse- esitse - esitdegilse (kosul yapilari burada kullanilir.)


for(let i =1; i <= 10 ;i++){
console.log(i);         }

// i = 1; xxxx ; i+2 tekleri yazdirmak
// i = 0; cccc ; i+2 ciftleri yazdirmak

for (let i=1 ; i<=5 ; i++){
    if(i%2==1){ //operatorler ile kosul yapisini olusturmak
        console.log("Tek")
    }else {
        console.log("Cift");
    }
}


let toplam =0;
for(let ii=50 ;ii>=1 ; ii--){
    toplam=toplam+ii;
    if(ii%10==0){
        console.log(ii);
    }
}
console.log("toplam:", toplam);