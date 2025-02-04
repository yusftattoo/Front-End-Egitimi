//  ****************    Coklu kosul yapisi kullanimi    ************
let userName = prompt("Kullanici adiniz:" )
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if(userName && age >= 18) {
    console.log("Ehliyet alabilirsiniz")
} else if (!userName){
    console.log("Kullanici adiniz yok!!!")
} else if (!(age >= 18) ) {
    console.log("18 yasindan kucuksunuz")
}

