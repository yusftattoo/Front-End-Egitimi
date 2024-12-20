
// PROMPT kullanımı // yeni bilgi almak ve ekrana yazdırmak
let fullName = prompt ("Lutfen adınızı giriniz:")
// console.log(fullName)

let hEtiketi = document.querySelector("#greeting")

// h1 içerisindeki yapıya promptan aldığımız bilgiyi    eklememiz gerekiyor.
// greeting.innerHTML ile alınıyor eşitlememiz ve daha önceden yazanan bilgisini yazmaya
// devam etmesi için ${greeting.innerHTML} yazılır. 
// promptan gelen bilginin yazması için ${fullName} eklenir. small style Ek ozellikler


greeting.innerHTML = `${greeting.innerHTML}<small style="color:red">${fullName}</small>`



//  `` //