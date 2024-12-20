
        function vat(price,rate = 20) {
            if(typeof price !=='number'){
                throw 'lütfen rakam yazınız.';
            } else if (price <= 0) {
                throw 'Lütfen pozitif bir sayı yazınız.';
            }
                // bu alanda 100yerine negatif vya harf yazılmamalıdır.
            const tax = price /100 *rate;
            const amount = price + tax;

            return amount;
        }
        
        const price = 100;
        const amount = vat(price);

        console.log("price", price);
        console.log("tax", amount - price);
        console.log("Amount", amount)
        
  