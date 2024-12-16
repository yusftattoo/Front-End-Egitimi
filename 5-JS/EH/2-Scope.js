/* SCOPE 
Global Scope
Funtion Scope
Block Scope 

Scope : Erişilebilirlik kapsamı.
*/

/* Global Scope : En geniş scope tur. hiç sınırı yoktur, her yerden erişilebilir.

*/
 a = 5;
/* Bu değişkene aşağıda bir çok alandan erişilebilir.
    Global scope içerisine herhangi bir yerden erişebilmek için
    tanımlanan değişken {} dışında tanımlanmalı..
*/
while(a>6){
    // console.log(a);
    // Burada bilerek a>6 yazıldı 4 yazılsaydı sonsuz döngü çalışacak / kapat aç yapılması gerekecek şuan için aktif değil
}
 
if(true){
    // console.log(a);
}

function method1(){
    console.log(a);
}

method1();

/* Function Scope : {} içerisinde erişebilir sadece, haricinde hata alınır.
    
*/

function method2(){
    var sayi= 10;
    console.log(sayi);
}

method2();

/* Block Scope : if while for gibi değişken içerisinde tanımlanan {} içerisindeki erişebilir verilerdir.
*/   
function method3(){

    var a= 5; //bu function scope / bu function'a sarı {}içerisinde erişebiliriz.
    console.log(a);
      
    // block scope..
    // if(true ){
    //         var b=10;  
           
    //     }

    //     while(true){
    //     }

    //     for(let i=0 ; i<=10; i++){
        
    //     }


    }
    method3();