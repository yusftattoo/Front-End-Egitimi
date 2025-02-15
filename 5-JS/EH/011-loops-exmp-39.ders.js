//! Çarpım Tablosu

// for (let i = 1; i<=10; i++){
//     for(let j=1 ; j<=10; j++){
//         console.log(i+"x"+j+"="+(i*j))
//     } 
//     console.log("------------------------")
// }



//! Asal Sayi Bulmak

let sayi = Number(prompt("Lutfen bir sayi giriniz."));
let sonuc =true
for(let i=2 ; i<= Math.floor(sayi/2) ; i++){
    if(sayi%i==0){ //! asal olmadigi durum icin.
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi +" asaldir.");
} else {
    alert(sayi+" asal degildir");
}