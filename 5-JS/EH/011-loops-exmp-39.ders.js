//! Çarpım Tablosu

// for (let i1 = 1; i1<=10; i1++){
//     for(let j=1 ; j<=10; j++){
//         console.log(i1+"x"+j+"="+(i1*j))
//     } 
//     console.log("------------------------")
// }



//! Asal Sayi Bulmak

// let sayi1 = Number(prompt("Lutfen bir sayi giriniz."));
// let sonuc =true
// for(let i2=2 ; i2<= Math.floor(sayi1/2) ; i2++){
//     if(sayi1%i2==0){ //! asal olmadigi durum icin.
//         sonuc=false;
//         break;
//     }
// }
// if(sonuc1){
//     alert(sayi1 +" asaldir.");
// } else {
//     alert(sayi1+" asal degildir");
// }

//! Faktoriyel bulmak

//! 5!= 5.4.3.2.1 = 120 dir.
//! 7!= 7.6.5.4.3.2.1 = 5040 tir.

// let sayi3 = Number(prompt( " Bir sayi giriniz."));
// let carpim3=1;

// for(let i3 =1 ; i3<=sayi3 ; i3++){
//     carpim3 = carpim*i;
// }
// alert("sonuc:" + carpim3);

//! Armstrong sayilar.
//! yazilan sayinin tektek her rakiminin küpünü alip çikan sonuclarin toplami sayinin kendisini veriyorsa armstrongtur.

let sayi4 = prompt("sayi giriniz:");
let toplam4 = 0;
for (let i4=0 ; i4<sayi4.length; i4++ ){
    let rakam4 = sayi4.charAt(i4);
    toplam4+=rakam4*rakam4*rakam4;
}

if(Number(sayi4)==toplam4){
    alert("Armstrong sayisidir.");
} else{
    alert("Armstrong sayisi degildir.");
}