// ! **************  FAT ARROW  ***************
// Fat Arrow Fonksiyonu kullanarak daha az kod satırı ile fonksiyonu yazmamıza olanak sağlıyor. 

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello("javaScript1")

//! islemler ayni satirda da yazilabilir,aciklamalar icin alt satir da yazildi.
//! / function \  yerine / const \ ile tanimlama yapilir.. degisken tanimlama ile benzer bir islem
//! / const helloFuncV1 = \ degisken tanimlandi.
//! ardindan parametre belirtiyoruz. / (firstName) \
    //! birden fazla parametre olusturulacaksa ()
//! Fatarrow fonc islemi oldugunu belirtmek icin icerisinde yazilmasi lazim / => \ kullanilir.
//! returnu de { } icerisine yazilir. / {console.log(`Merhaba ${firstName}`)}\ bu sekilde.
    //! NOT: tek bir islem yapilacaksa {} icerisinde yazma gerek yok.
//! fonksiyonu calistirmak icin. / helloFuncV1("helloFuncV1")\ "" icerisine ne yazarsak ekrana o gelir.

const helloFuncV1 = (firstName) =>
     {console.log(`Merhaba ${firstName}`)} 
helloFuncV1("helloFuncVv1")


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
        //! bir parametre bir  donusislemi oldugu icin bu sekilde yazilmasi sagliklidir
        //! NOT: yukarida tek bir islem yapilacaksa {} icerisinde yazma gerek yok.
helloFuncV2("helloFuncVv2")



//! birden fazla parametre olusturulacaksa () icerisinde yaziyoruz.
const helloFuncV3 = (firstName, lastName) =>
    console.log(`Merhaba ${firstName} ${lastName}`)

helloFuncV3("helloFuncV3", "Last Name info")

//! Burada return olarak info ile döndürebilmemiz icin fonsiyonu let ile
//!  tanimlayip console yazdiriyoruz ardında return edebiliriz.

const helloFuncV4 = (firstName, lastName) => { //! NOT:birden fazla islem yapildigi icin {} kullanilir..
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
//! *********** 1.Examp 
var toplam23 = function(x, y) {
    return x + y;
  };
  
  // ES6
  let toplam233 = (x, y) => x + y ;

//! ********** 2.Examp 
var sayi23 = function(x) {
    return x*x
};

// ES6
let sayi233 = x => x*x;
//! ******** 3.Examp 
var multiplier = function(item, multi) {
    return item * multi
};
multiplier(5, 2); // output : 10

// ES6
const multiplier3 = (item, multi) => item * multi;
multiplier(5, 2);

//! ********** 4.Examp 
var myList = function(param1, param2) {
    return param1.concat(param2);
  };
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
  
  //ES6
  const myList3 = (param1, param2) => param1.concat(param2);
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

//! *********** "return" keyword;
//! Statement'lar süslü{ } parantez kullanılarak yazılırlar. 
//!  Eğer fonksiyon içerisinde bu parantezlerden varsa return keyword'ü kullanmamız gerekir.

var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }

//! "this" keyword;

//! this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. 
    //! Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri 
    //! her zaman parent fonksiyonuna eşittir. Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz.
    //! Yani kendisini referans göstermez, her zaman parent'ına bakar. paren bos old. icin undifend veya "" (bos) doner. 

let movie = { 

name: "La la land",

thisInArrow:() => { 
console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
}, 
    
//! Regular fonksiyonlar (function) çağrıldığında this, fonksiyonun çağrıldığı nesneyi gösterir.
    //! Yani burada movie.thisInRegular() çağrıldığında:
    //! this => movie objesini gösterir.
    //! movie.name => "La la land"
thisInRegular(){ 
console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
} 
};        
movie.thisInArrow(); // output : Movie name is
    //! this olarak window objesini alıyor ve window.name tanımlı değil.
    //! burada window.name: "Global Name" tanimlanmıs olsaydi thisInArrow sonucu "Movie name is Global Name" olacaktı.
movie.thisInRegular(); // output : Movie name is La la land


//! Özet: Normal fonksiyonlar, hangi obje üzerinden çağrılırsa this o objeyi referans alır.
    //! Eğer window.name önceden tanımlanmışsa, onu yazdırır.
    //! Tanımlanmamışsa boş bir string ("") veya undefined döner.








//! ENES  Bayram

//! *******  onceden bu sekilde yazilirdi.
const kupAl = (x) => {
    return x*x*x
}
console.log("Deger ", kupAl(3))

//! FAT ARROW ile suan bu kod, 
 const kupAll = x => x*x*x
 const kareAl = y => y*(y+y)

 console.log("Deger: ", kupAl(3))
 console.log("Deger: ", kareAl(5))




//!  DOM Secicileri ile aciklama 

document.addEventListener("click",function(){
    //! click event ı calistiginda function u calistir islem komutudur.
})

//!  *******  Arrow(FAT) Fonction da
//! document.addEventListener("click" , () => {
//! buraya kod yazilir     })


