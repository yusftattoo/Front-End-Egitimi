let username = prompt("kullanıcı adınızı giriniz:")
// eger kullanıcı adı varsa ekrana isim yazar
// eget (username.lenght > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.lenght > 0) {console.log(username)} else{console.log("bilgi yok")}

if (username) {
    console.log(`kullanıcı bilgisi: ${username}`)
} else {
    console.log("bilgi yok")
}


var x =5;
var y= 7;

if(x > y) {
    console.log(x + "sayisi" + y +  "sayisindan buyuktur"  );
}
else {
    console.log(y + "sayisi" + " " + x + " saiyisi buyuktur.")
}



// Not ortalaması hesapalama örneği

var ogrVizeNot = 65; 

var ogrFinalNot = 45;

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <=30) {
    console.log("Not ortalamanız:" + ogrOrtalama + "Kaldınız(FF).");
}
    else if(ogrOrtalama >=31 && ogrOrtalama <=49) {
        console.log("Not ortalamanız:" + ogrOrtalama +  " DC koşullu geçtiniz..");
    }
    else if(ogrOrtalama >=50 && ogrOrtalama <=84){
        console.log("Not ortalamanız:" + ogrOrtalama + "CC - geçtiniz.")
    }
    else if(ogrOrtalama >=85 && ogrOrtalama <=100) {
        console.log("Not ortalamanız:" + ogrOrtalama + "AA - Geçtiniz.");
    }



    //  Not ortalaması hesapalama örneği


    