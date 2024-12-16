/*  ********* var-let-const ********************

! Objeler {} içerisinde oluşturulur.. 

********************** var Değişkeni  ************************* 
Fonksiyon kapsamlı (function-scoped): Yani, bir fonksiyon içerisinde tanımlanırsa o fonksiyonun tamamında geçerlidir. 
Blok seviyesinde (örneğin if veya for içinde) tanımlandığında bile blok dışından erişilebilir.

Blok kapsamı olmayan bir örnek:

*/ 

if (true) {
  var x = 5;
}
console.log(x); // 5 (blok dışından erişilebilir)

// var: ile tanımlanan herşey function scope tur.
    function selamVer(){
        var selam = "Herkese Selam"; 
        // var ile değişken tanımlanırsa fonsiyon içerisinde tanımlanırsada function scope oluyor.
        if(true){
            var b=13;
            // var ile tanımlandığı için, block içerisinde tanımlanırsada function scope gibi davranır
            //  içeriden ve dışarıdan bu bilgi consola yazdırılabilir..
            // büyük projelerden heryerden erişim durumlarında bellekten fazla yer kaplar..
            // ! Not: var ı function dışında tanımlansaydı global scope olurdu.
        }

        console.log(b);
        console.log(selam);
        }
    selamVer();




/*
********************   let Değişkeni  ***********************
! let ile oluşturulan objlerin içerisindeki bilgi değiştirilebilir. const ile değiştirilemez..
 blok kapsamlı (block-scoped) bir değişken tanımlayıcıdır. var'dan farklı olarak, sadece tanımlandığı blok (örneğin, {} içinde) içinde geçerlidir/erişilebilir..


*/
// ! var ile aynı değişken ile iki tanımlama yapılabilir let ve const ile block içerisinde yapılamaz.
let b= 55;
b=65;

console.log(b);

function selamVerr(){
    var selam="Herkese selam yok"; //let scope
    if(true){
        let b =10;
        
        // var ile hem buradan hemde dışarıdan erişeliyor let ile sadece buradan bloke içerisinde erişilebilir.
        // ! var ile aynı değişken ile iki tanımlama yapılabilir let ve const ile block içerisinde yapılamaz.
        console.log(b);
    }
    
    console.log(selam);
}
selamVerr();

/* yukarıda ki ornek const içinde geçerlidir. 

 ********************   const Değişkeni (constant:değişmez-sabit) *********************** 


Blok kapsamlı (block-scoped): let gibi sadece tanımlandığı blok içinde geçerlidir.
Sabittir: Tanımlandığı anda bir değer atanmalı ve bu değer daha sonra değiştirilemez.
Nesneler ve Diziler İçin: Bir const nesnesinin veya dizisinin özellikleri/dizinleri değiştirilebilir.

? var artık genellikle önerilmez çünkü blok dışına sızan değişkenler hatalara yol açabilir.
? let bir değişkenin ileride değiştirileceği durumlarda tercih edilir.
? const ise sabit veya değişmeyecek bir değeri tanımlarken kullanılır. Eğer bir değerin sabit olması gerekiyorsa, const en iyi seçenektir.
*/


function selamVerr(){
    var selam="Herkese selam yok"; //let scope
    if(true){
        let b =10;
        // var ile hem buradan hemde dışarıdan erişeliyor let ile sadece buradan bloke içerisinde erişilebilir
        console.log(b);
    }
    
    console.log(selam);
}
selamVerr(); 

// ! let ile oluşturulan objlerin içerisindeki bilgi değiştirilebilir. const ile değiştirilemez.. const ile değişkenin içerisinde özellik güncellenebilir.
 const user={
    username:"yusuf",
    password: "123",
 }
 user.username="yusuf kayabası"
 console.log(user);
/*
let ve const, var'a göre daha güvenlidir, çünkü blok kapsamında çalışır ve hoisting sırasında hata vererek potansiyel hataları önler.
const, sabit değerler için kullanılırken, let, değiştirilebilir değerler için uygundur.

var ile aynı değişken ismi ile iki tane oluşturulablir / son oluşturulan değişkeni geçerli sayar
let veya const ile değişken oluşuturlduğunda aynı değişken ismi iki sefer kullanılamaz
*/
// ! var ile aynı değişken ile iki tanımlama yapılabilir let ve const ile block içerisinde yapılamaz.

const pi = 3.14159;
console.log(pi); // 3.14159
// pi = 3;  Hata: pi'ye yeniden değer atayamazsınız


const arr = [1, 2, 3];
arr.push(4); // Diziye yeni eleman eklenebilir
console.log(arr); // [1, 2, 3, 4]

const obj = { name: "Alice" };
obj.age = 25; // Nesnenin içeriği değiştirilebilir
console.log(obj); // { name: "Alice", age: 25 }



