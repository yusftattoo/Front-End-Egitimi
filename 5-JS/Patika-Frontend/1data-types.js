        // "" ile '' aynı fakat  metin içerisinde ' kullanıldığında karışıklık olabiliyor.
        let str = 'John';
        console.log(typeof str, str);
        
        let int = 25;
        console.log(typeof int, int);
       
        let bool = 25;
        console.log(typeof bool, bool);
       
       let bigint = BigInt('453434634634747347347347345345343');
       console.log(typeof bigint, bigint);
       
       let symbol = Symbol('aras');
       console.log(typeof symbol, symbol);
    //  symbol  değiştirilemez veri
    
        let x;
        console.log(typeof x, x);

        let y= null;
        console.log(typeof y, y);
        // Boş veri alanı oluşturma

        let obj = {
            name:"john",
            age:28,
            admin:true,
        };
        console.log(typeof obj, obj)

        // Immutable
        let name ="john";
        let cloneName = name;
        cloneName = "Doe";
        console.log('immutable', name, cloneName);

        // mutable
        let user = {
            name: "john"
        }
        let cloneUser = user;
        // user e değişken tanımlandı daha  sonra cloneuser ile
        //  eşitlendiği için alt satırda user değiştirildi
        cloneUser.name = "Aras";
        console.log("mutable", user, cloneUser);



        var namee ="Alice";
        console.log(namee);

      


        const NameBos = 178;
        console.log("Bir sayı-", NameBos);

      

        const houpk = 65;
        console.log("ikinci sayı:", houpk);

        let Gonf = 59;
        console.log("iz:", Gonf);

        var jolek ="big.50";
        console.log("Büyük:",jolek);

       

        const years = 1993;
        console.log("Doğum yılım:", years);

        

        let use = {
            name: "john"
        }
        let ccloneUser = use;
        // user e değişken tanımlandı daha  sonra cloneuser ile
        //  eşitlendiği için alt satırda user değiştirildi
        ccloneUser.name = "Aras";
        console.log("mutable", use, ccloneUser);

        // ****************************************************************
        
        let moul ={
            myName: "Yusuf"
        }
        const kuin = moul;
        kuin.myName= "Yufuk"
        console.log("mutable", moul, kuin);
        // ****************************************************************
        let ffruit ={
            myFruit: "Incir"
        }
        const vegetable = ffruit;
        vegetable.myFruit =   "Tomatoes"
        console.log("Meyve:",vegetable, ffruit);
        // ****************************************************************
        let book = {
            myBook: "Babalar ve Oğulları"
        }
        const books = book;
        books.myBook = "Türlerin Kökeni"
        console.log("Okuduğum Kitap:", book, books);
        // ****************************************************************
        let terlik={
            myTerlik: "Plaj Terliği"
        }
        const dayTerlik = terlik;
        dayTerlik.myTerlik="Ev Terliği"
        console.log("Günlük Terlik:", terlik, dayTerlik);
        // ****************************************************************
        let kalemlik ={
            kalem: "kırmızı"
        }
        const Blue = kalemlik;
        Blue.kalem="Mavi"
        console.log("Kalemlerim:",kalemlik, Blue);
        // ****************************************************************
        let bilgisayar = {
            Monster:"Monster"
        }
        const mac = bilgisayar;
        mac.Monster="MacBook"
        console.log("Bilgisayarım:", bilgisayar, mac);
        // ****************************************************************
        let pencere ={
            kpencere:"room"
        }
        const doublewindow = pencere;
        doublewindow.kpencere="myRoom Window"
        console.log("Odam:", pencere, doublewindow);


        let pooung ={
            phone:"iphone"
        }
        

        const hugg=pooung;
        hugg.phone="Xaomi"
        console.log("new",pooung);

        let ggg ={
            bbbb:"yyyy"
        }
        const fff=ggg;
        fff.bbbb="cccc"
        console.log("ffdd:", fff);

        //***********************************

        var hadd= "gunyl";
        console.log("var:", hadd);

        let jouns = 34;
        console.log("JO:", jouns);

        const coly = 5566;
        console.log("ff:", coly);

        
        // Operators ********************
       
        let x1 = 10;
        let y1 = 20;
        let z1 = 3;

        Q  = x1 - y1;
        Q1 = y1 - x1;
        Q2 = x1 * y1;
        Q3 = x1 / z1;
        Q4 = x1 % z1;
        Q5 = x1 ** z1;
        Q6 = x1+1;
        Q7 = y1-4;
        console.log("Sonuç:", Q, Q1,Q2,Q3,Q4,Q5,Q6,Q7);

        // Operator İşlem yapma
        // Toplama
        let a = 10;
        a += 5;
        console.log(a); /* a nın yanına > < = ! operatörleri 
        tanımlanırsa boolean ile işlem yapılmış olur. */
        //Çıkarma
        let b = 11;
        b -= 10;
        console.log(b);
        // Çarpma
        let c = 20;
        c *= 3;
        console.log(c);
        // Bölme
        let d = 15;
        d /= 3;
        console.log(d);
        // Mod alma
        let e = 25;
        e %= 4;
        console.log(e);


        let zecx =( a,b) =>{
            return a-b;
        };
        console.log(zecx(5,3));

        
        // Eşitleme Karşılaştırma

        // TYPEOF
         // Number
         let agee= 31;
        console.log(typeof age);

        // String
        let nnaame = "Alice";
        console.log(typeof nnaame);

        // boolena
        let student = true;
        console.log(typeof student);

        // Examp:
        let aa= 3;
        let bb= 3;

        let result = a+b;
        console.log(result<14);

        // Undefined
        let noted;
        console.log(typeof noted);

        // Symbol
        let symbool = Symbol("id");
        console.log(typeof symbool);

        //BigInit
        let bigNumber = 1234124124124124125121212123123n;
        console.log(typeof bigNumber); 

        // Object 
        let person = {
            nnamee:"yusfff", aggee: 31  };
            console.log(typeof person);

        // **************
        let persoon = {
            nnamee:"yusfff", aggee: 31  };

            const guji = person;
            guji.nnamee="yusuf";
            console.log( persoon);
        
        // **********************************

        // Array
        let numbeerr =[1,2,3,4,5];
        console.log(typeof person);






    