// Comparison Operator

const age = 18;
console.group("Comparison operator");
console.log(age > 17 ? "Değer büyüktür." : "Değer büyük değildir.");
console.log(age < 17 ? "Değer küçüktür" : "Değer küçük değildir.")
console.log(age == 17 ? "Değer eşittir." : "Değer eşit değildir.")
console.log(age === "17" ? "Değer ve tür eşittir" : "Değer ve tür eşit değildir.")
console.groupEnd();

// *******************

const visa = true;
const permission = true;

console.group("Logical Operators");
if (visa){
    if(age >= 18 || permission){ //visa varsa 18 eşitliği sağlanıyor veya izni arsa true döner
    console.log("Türkiye'ye Hoşgeldiniz.") 
    } else{
        console.log("Ebeveyninizin izni yoktur.")
    }
}    else { 
    console.log("Talebiniz Reddedilmiştir.")
 
};

/******* */


if (visa && age >=18 || visa && permission){
        console.log("Türkiye'ye Hoşgeldiniz.");
    } else if (  visa && age < 18 || visa && !permission) {
        console.log("Ailenizin İzin gerekmektedir.");
    } else{
        console.log("Talebiniz Reddedilmiştir.");

};



const viisa = true;
const peermission = true;

console.group("Logical Operators");
if("aras" === name || "cenk" === name){ // || yerine &&  
}    else {

};


//ID Statments
const score =65;

if (score >= 90){
    console.log("Derece A");
} else if(score >= 80){
    console.log("Derece B")
} else if(score >= 70) {
    console.log("Derece C")
} else if(score >=60){
    console.log("Derece D")
} else if(score >=50){
    console.log("Derece E")
} else {
    console.log("Derece F")
}


//Switch Statements

const day = 6;

switch (day) {
    case 1:
        console.log("Pazartesi")
        break;
    case 2:
        console.log("Salı")
        break;
    case 3:
        console.log("Çarşamba")
        break;
    case 4:
        console.log("Perşembe")
        break;
    case 5:
        console.log("Cuma")
        break;
    case 6:
        console.log("Cumartesi")
        break;
    case 7:
        console.log("Pazar")
        break;
    default:
        console.log("Geçerli bir gün bulunamadı.")
        break;
}

const day1 = 5;

switch (day1) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Hafta içi");
        break;
    case 6:
    case 7:
        console.log("Hafta Sonu")
        break;
        default:
            console.log("Geçerli birgün seçiniz.");
            break;
}

const color= "yellow";

if(color === "red") {
    console.log("Dur");
}   else if (color === "yellow") {
    console.log("Dikkat Et.");
}   else if( color === "green"){
    console.log("Geç");
}   else {
    console.log("Bilinmeyen renk");
}

switch (color) {
    case "red":
        console.log("Dur");
        break;
    case "yellow":
        console.log("Dikkat et");
        break;
    case "green":
        console.log("Geç");
        break;
    default:
        console.log("Bilinmeyen renk");
        break;
}
