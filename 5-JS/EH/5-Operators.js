/*

=	Değeri atar	x = 5
+=	Değeri ekleyip atar	x += 3
-=	Değeri çıkarıp atar	x -= 2
*=	Değeri çarpıp atar	x *= 4
/=	Değeri bölüp atar	x /= 2
%=	Bölme işleminden kalanı atar	x %= 3
**=	Üs hesaplayıp atar	x **= 2
&=	Bit düzeyinde VE işlemi yapar	x &= 3
`	=`	Bit düzeyinde VEYA işlemi yapar
^=	Bit düzeyinde XOR işlemi yapar	x ^= 1
<<=	Bit düzeyinde sola kaydırma yapar	x <<= 1
>>=	Bit düzeyinde sağa kaydırma yapar	x >>= 1
>>>=	Sıfır doldurmalı sağa kaydırma yapar	x >>>= 1
&&=	Mantıksal VE işlemi	x &&= y
! Değil Operator
??=	Nullish birleştirici atama işlemi	x ??= y
*/



/*Temel Atama Operatörü: =
Bu operatör, sağdaki değeri soldaki değişkene atar.


Artırmalı Atama Operatörü: +=
Bu operatör, soldaki değişkenin mevcut değerine sağdaki değeri ekler ve sonucu değişkene atar.



Azaltmalı Atama Operatörü: -=
Bu operatör, soldaki değişkenin mevcut değerinden sağdaki değeri çıkarır ve sonucu değişkene atar.


 Çarpımlı Atama Operatörü: *=
Bu operatör, soldaki değişkenin mevcut değeri ile sağdaki değeri çarpar ve sonucu değişkene atar.


Bölmeli Atama Operatörü: /=
Bu operatör, soldaki değişkenin mevcut değerini sağdaki değere böler ve sonucu değişkene atar.



Modüllü Atama Operatörü: %=
Bu operatör, soldaki değişkenin mevcut değerini sağdaki değere bölerek kalanı bulur ve sonucu değişkene atar.


Üslü Atama Operatörü: **=
Bu operatör, soldaki değişkenin mevcut değeri üzerine sağdaki değeri üs olarak alır ve sonucu değişkene atar.

Bit Düzeyinde Atama Operatörleri:
Bit düzeyinde işlemler yapmak için kullanılan operatörler:
*/

// Ve atama operatörü: &=
let x2 = 5; // (101 in binary)
x2 &= 3;    // (011 in binary) => x = 1 (001 in binary)

// Veya atama operatörü: |=

let x3 = 5; // (101 in binary)
x3 |= 3;    // (011 in binary) => x = 7 (111 in binary)


// XOR atama operatörü: ^=
let x4 = 5; // (101 in binary)
x4 ^= 3;    // (011 in binary) => x = 6 (110 in binary)


// Sol kaydırma atama operatörü: <<=
// Sağ kaydırma atama operatörü: >>=
let x5 = 5; // (101 in binary)
x5 <<= 1;   // x = 10 (1010 in binary)

// Sıfır değeri vererek sağ ı doldurur ve sağ kaydırma atama operatörü: >>>=

let x6 = -5;  // x = -5 in binary
x6 >>>= 1; // Sıfırlarla sağ kaydırılır



// Mantıksal Atama Operatörleri:
// &&= VE atama operatörü: &&= Eğer soldaki değer doğru (true) ise sağdaki değeri atar.
let x7 = true;
x7 &&= false;  // x = false olur

//***************
let age = 31;
let money = 2000;
let healt = true;
deserve = 3;
console.log(age>18 && money>1000 && healt===true);

// ||= VEYA atama operatörü: ||= Eğer soldaki değer yanlış (false) ise sağdaki değeri atar.

let x8 = false;
x8 ||= true;  // x = true olur

console.log((age>18 && money>1000) || (healt===true && deserve>1) );

//***************
console.log(5>3 || 5<3 || 5>1 || 9<2);

// ! Değil Operatoru

console.log( ! (5>2));

// - ??= Mantıksal birleştirici atama operatörü: ??= Eğer soldaki değer null veya undefined ise sağdaki değeri atar.
let x9 = null;
x9 ??= 5;  // x = 5 olur



// ***************************


// ==	Eşittir, tip dönüşümü yapar	5 == '5' (true)

// ===	Sıkı eşittir, tip dönüşümü yapmaz	5 === '5' (false)

// !=	Eşit değildir, tip dönüşümü yapar	
let yas = 23;
console.log(yas!=23); // false

// !==	Sıkı eşit değildir, tip dönüşümü yapmaz	5 !== '5' (true)

//  <	Küçüktür	5 < 10 (true)
console.log(11<5);
//False

// <=	Küçük veya eşittir	5 <= 5 (true)
console.log(6<=7)
// >	Büyüktür	10 > 5 (true)
console.log(5>9); //true
// >=	Büyük veya eşittir	5 >= 5 (true)
 console.log(11 >= 12); //false
/* Diğer Karşılaştırma Operatörleri
a. null ve undefined Karşılaştırması
JavaScript'te null ve undefined özel durumlar olarak kabul edilir. Bu iki değer, sadece kendileri veya birbirleri ile eşit kabul edilirler. */

console.log(null == undefined);  // true (tip dönüşümü yapılır)
console.log(null === undefined); // false (tipler farklı)

/* NaN (Not-a-Number) Karşılaştırması
JavaScript'te NaN, kendisiyle bile eşit değildir. */

console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false

console.log(isNaN(NaN));  // true


// Karşılaştırma Operatörlerinin Kullanımı
// Bu operatörler, özellikle koşul ifadelerinde (if, while, for döngülerinde) kullanılır.


let aage = 18;
if (aage >= 18) {
  console.log('Yetişkin');
} else {
  console.log('Çocuk');
} //  Yetişkin

// Sözlüksel (String) Karşılaştırma
// String değerler sözlük sırasına (alfabetik sıraya) göre karşılaştırılır. Karakterlerin Unicode değerlerine göre karşılaştırma yapılır.
console.log('a' < 'b');  // true
console.log('apple' > 'banana');  // false
console.log('A' < 'a');  // true (küçük harfler büyük harflerden büyüktür)
