// ARRAY /Dizeler. 
// !! ARRAY'ler Objedir.
// Sayıların bulunduğu dize / aynı dizede hem number hemde string eklenebilir.
let number = [-1,3 ,2, 4];
let strings = ["b","c","d"];

console.dir(number);
console.dir(strings);

// Array İtem ına erişmek ve güncelleme
number[0]

number[0] = 1;


// Dizinin sonuna eleman ekleme
strings.push("push","2");

// Dizinin başına eleman ekleme
strings.unshift("unshift");

/* Dizinin belirli bir yerine eleman ekleme..
splice itemeklemek ve item silmek için kullanılır. 

İistediğimiz yere item ekleme...
minimum 3 parametre alır, eklemeye başladığımız yer 2 yazılır.
, 0 silinecek item sayısını belirler 0 yazmak zorundayız.
0 yerine 1 yazılırsa, 2.item ı silip yeni string ekler. şuan için 0 yazdk.
 sonrasında eklenecek item yazılır.
*/
strings.splice(2, 0, "splice1","splice2");

// İtem silme
// ikinci parametreye 1 yazdığımız için splice1 i sildi. 
strings.splice(2, 1);

// Dizinin son elemanını silmek, otomatik olarak son elemenı siler...
// kaç sefer yazılırsa her seferinde bir eleman siler
strings.pop();  //sadece elemanı siler.
console.log(strings.pop()); //sildiği elemanı ekranda gösterir.

// Dizinin son elemanını silmek
// comut dizisi ile eklendiğimiz unshift silindi
 strings.shift(); //otomatik siler
 console.log(strings.shift()); // sildiği elemenı ekrana yansıtır.

//  Dizi elemanlarını terimsel olarak doğru sıralar
number.sort();

// Dizi elemanlarını ters sıralar

number.reverse()


// Yukarıda Array referansı üzerine işlem yapılıyordu.
//Değişken ataması 
//Dizi içindeki her eleman için işlem yap
 
// REDUCED 
/* diziyi daha basit bir değere dönüştürmek veya toplamak için kullanılır:
sayısal toplama, nesnelerin birleştirilmesi, hatta yeni diziler veya nesneler oluşturma 
Filtreleme ve Gruplandırma: Dizi elemanlarını gruplara ayırmak.
Yeni veri yapıları oluşturma: Nesneler, yeni diziler veya başka veri yapıları yaratma.
*/
/* İlk önce Array seçilir - metod yazılır (reduce) = tanımladığımız valueları alıyor ve işlem yapmamızı sağlıyor.
daha sonra value yazılır: buradaki valueları almasını söyleniyor

*/
const reduced = number.reduce(function(total, value) {
return total + value; // bütün elementleri birbiri ile topladık..
}, 0);
// bu total seçeneğin geriye dönmesini ve reduce eşitlenmesi gerekiyor.

console.log("number.reduce:", reduced);


// reduce() dizideki tüm sayıları toplar
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);



/* ******* Bu örnekte, reduce() kullanılarak bir alışveriş sepetindeki toplam fiyat hesaplanır. */
const shoppingCart = [
    { item: 'Elma', price: 5 },
    { item: 'Muz', price: 3 },
    { item: 'Portakal', price: 7 }
  ];
  
  const totalPrice = shoppingCart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
  console.log(totalPrice);


  //   Bu örnekte,  seçilen bir diziye yeni  elemanlar ile yeni bir Array birleştirilir.
// 0000000000000000
  //   const concated = number.concat([7,6]);
//   console.log("number.concat:", concated);
  
  //   Bu örnekte,  seçilen bir diziye yeni  elemanlar ile eski bir Arryda birleştirilir.
//   birnevi push metodu kullanmak.
// !aynı metod kullanldığı için  00000 yazan kod blogu açıklamaya alındı
number = number.concat([5,6,7,8,9]);
console.dir(number);
const concated = number.concat([7,6]);
console.log("number.concat:", concated);


//   Bu örnekte, reduce() kullanılarak bir dizi elemanları toplamını tek bir cümlede birleştirilir.

const words = ['reduce', 'metodu', 'JavaScript'];
const sentence = words.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(sentence); // Çıktı: "reduce metodu JavaScript"




/* reduce() dizideki tüm sayıları toplar. accumulator başlangıç
 değeri olarak 0 atanmıştır, ve her iterasyonda dizi
 elemanlarını bu değere ekleyerek toplama işlemi yapar. */

 const numbers = [1, 2, 3, 4, 5];
 const suum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 console.log(suum); // Çıktı: 15

// Gruplama işlemi yapma
const people = [
    { naame: 'Ali', aage: 25 },
    { naame: 'Ayşe', aage: 30 },
    { naame: 'Mehmet', aage: 25 }
  ];
  
  const groupByAge = people.reduce((accumulator, person) => {
    const key = person.aage;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(person.naame);
    return accumulator;
  }, {});
  
  console.log(groupByAge);
  // Çıktı: { 25: ['Ali', 'Mehmet'], 30: ['Ayşe'] }




//   Dizinin içindeki tüm elemanlar için koşullandırma/test etmek
// Array listesi içerisinde bir koşulu sınamak ve tüm elemanların buna uyup uymadığını test etmek.

const isOk = number.every(function(value) {
  if (value => 1){
    return true
  }
  });
  console.log("number..every",isOk)

// Bazı elemanlar için koşulu test etmek
const issOk = number.some(function(value){
  if(value > 17 ){
    return true
  }
});
console.log("number.some", issOk);

// Dizinin bazı bölümü veya elemanlarını bölmek/almak istersek
const sliced = number.slice(1, 10);
console.log("number.slice", sliced);

// Diziyi metine dönüştürmek
const joined = strings.join("");
console.log("string.join;",joined);


// Dizi içinde eleman arama ve bulma
// gelen value a ya eşitse a ya geri döner,
const finded = strings.find(function(value){
  if (value === "c" ){
    return value;
  }
});
console.log("stringsfind:", finded);


// Dizi içinde tüm elemanları ara
const filter = strings.filter(function(value){
  if (value === "c"){
    return value;
  }
});
console.log("string.filter:", filter);

// Dizi içindeki tüm elemanlar için işlem uygula
const mapped = strings.map(function(value){
  return "(" +value + ")";
});
console.log("string.map:", mapped);



console.log("numbers[]", number[5]);
console.log("strings[]", strings[2]);

// Dize içerisinde bir elemanın var olup olmadığını kontrol eder.
console.log("strings.includes", strings.includes("d"));



// Value nun index numarasını bulmak için kullanılır.
console.log("strings.indexOf()", strings.indexOf("d"));

// aşağıdaki kod sorun olmadığı halde  çalışmıyor.
// yukarıdaki soldan sağa geliyor aşağıdaki sağdan sola bu neden ile index numaraları farklı
// console.log("strings.indexOf()", strings.lastindexOf("d"));

// istediğimiz indexteki value yu çağırır
console.log("strings.at()", strings.at(1));