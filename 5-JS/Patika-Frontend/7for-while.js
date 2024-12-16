// FOR /For döngüsü
for (let i=0; i<5; i++){
    // çalışmasını istemediğimiz değer için if değeri kullalabilir.
    if(i===2){
        continue;
    }
    console.log("for", i);
}
for (let i=0; i<5; i++){
    // durdurmak istediğimiz değer için if değeri kullalabilir.
    if(i===2){
        break;
    }
    console.log("for", i);
}


//FOR in loop / Object döngüsü

const person = {
    name: "yusuf",
    age: 31,
    city:"Mersin",
}
// key person içerisinde tanımlı nesneler(object)in propert nameleri ( name-age-city)
/* içerisinde valueları almak için "const value =person" yazılır 
objelere erişmek için normalde person.name/age/city yazarız fakat,
 dinamik bir key olduğu için  [key] ile erişiyoruz.-- */
//  ! "name-age-citydir" = KEY
//  ! "Yusuf -31- Mersin" = VALUE
for(const key in person) {
    const value = person [key];
    console.log("for...in",key, value   );
}
const peerson = {
    name: "yusuf",
    age: 31,
    city:"Mersin",
}

for(const key in peerson) {
    // çalışmasını istemediğimiz değer için if değeri kullalabilir.
    if( key==="age"){
        continue;
    }
    const value = peerson [key];
    console.log("for...in",key, value   );
}





// FOR Of loop
const fruits = [
    "chery",
    "fig",
    "apple",
];
// her array item ını bir değişkene atandı(fruit of fruits)
for (const fruit of fruits){
    console.log("for...off", fruit);
}



//WHİLE Loop
// Yukarıdaki for ile yapılan ""for (let i=0; i<5; i++){"" döngü while ile kodun dışında yapılır.

let count =0;

while (count < 5) {
    console.log("while", count);
    count++;
    // Kod blogun ++ yapmaz ise sonsuz döngüye girer.yukarıda <5 ise çalış komutu verildi  için
}
/* While döngüsünde önce koşul kontrol ediliyor (count < 5) 
sonrasında cod scop u içerisindeki komutlar çalışıyor.
*/


// Do While
// Önce kod çalışıyor, daha sonra döngü kontrol edilyor.
let count2 = 5;

do{
    console.log("do..while", count2);
    count2--;
} while (count2);

// Yukarıdaki açıklamayı net olarak göstermek için bir ornek:



let count1 = 5;

do{
    console.log("do..while", count1);
    count1--;
} while (count1 >10);
/* buradan count1 değeri 10dan büyük ise ekrana yaz komutu var fakat 
onun önceisinde kod dizinini bir defa çalıştırılmış bu neden ile / "5" yasıdı.           /*