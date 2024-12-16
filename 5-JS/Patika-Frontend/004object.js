const user ={
    name: "Yusff",
    surname:"Kybsi",
    age: 31,
    job: "sware. developer",
    hobbies:["Running","Tennis"],
    admin: false,
    // buraya kadar veri tüleri örneği verildi
    // verilerin kullanımı:
    fullName: function(){
        return this.name + " " + this.surname;
    }
}
/* içerideki bilgiyi bir yere eşitlememiz gerekiyor.
bu bilgiyi user adında ir değişkene atadık. */
console.dir(user);
// console.log(user); // iki şekilde kullanılabilir. 
/* console.log() komutu genellikle bir nesneyi sadece düz bir
 şekilde çıktı verirken, console.dir() nesnenin özelliklerini 
 ve metotlarını hiyerarşik olarak genişletilebilir bir biçimde gösterir.*/




// bilgileri değiştirmek ve silmek
 const useer ={
    name: "Yusff",
    surname:"Kybsi",

    fullName: function(){
        return this.name + " " + this.surname;
    }
}


// Nesne Tanımlama:

let person = { name: "Alice", age: 25, isStudent: true };

// Nesneye Erişim:


console.log(person.name); // Alice

// Köşeli Parantez Notasyonu:

console.log(person["age"]); // 25

// Nesneye Yeni Özellik Ekleme:

person.gender = "female"; console.log(person.gender); // female

console.dir(useer);

// useeer.age yazarak bir property seçtik,consola yazıyoruz.
console.log("user Name:", useer.name); // burada direkt yazrak verinin kendisine ulaştık..

// Yeni veri eşitlemek

const uuseer ={
    name: "Yusff",
    surname:"Kybsi",

    fullName: function(){
        return this.name + " " + this.surname;
    }
}

console.dir(uuseer);

uuseer.name = "İsa"
// Bir property değiştirmek

uuseer.country= "Turkiye"
// Yeni bir veri eklemek

// delete keyword u silmek için
uuseer.date= 12
delete uuseer.date;

console.log("user Name:", uuseer.name);
// Bir property erişmek



// VERİ BİRLEŞTİRME

const userr ={
    name: "Yusff",
    surname:"Kybsi",

    fullName: function(){
        return this.name + " " + this.surname;
    }
}
Object.assign(userr,{
    city: "Mersin",
})

console.dir(userr);
// sadece proprty nameleri görüntüleme
console.log('Object.keys()', Object.keys(user));
// SAdece valueları görüntülemek
console.log('Object.values()', Object.values(user));
// Property ve valueları gruplayıp göstereme
console.log('Object.entries()', Object.entries(user));
// eklediğimiz bir fonksiyonu kullanmak
console.log('user.name', user.name);
// içeriye koyduğumuz birfonksiyonu kullanmak 
console.log("User.fullName:",user.fullName());