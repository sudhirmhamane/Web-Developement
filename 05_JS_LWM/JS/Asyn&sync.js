/*
    1) sync in JS->

        sync matalab jab hum ak kam complete karne par hi dusra kam hatme lete hai dusra kaam complete karne ko, use hi sync kehate hai.

        agar hame teen kam karne hai to hum ak ko complete karenge and second aur third, ak kam complete hone tak dusra kam nahi karenge ise hi sync kehate hai.

        JS is a SYNCRONOUS.

        JS ak bar me ak hi kam ak sath kar sakti hai.

    2) async in JS->

        async yani hum kya karte hai ki multiple kaam ak sath shuru karte hai to jo bhi pahile complete ho jayega to uska anwser pahle de dena.

        async me multiple task ak sath run hote hai.

        kai bar hamara code depend rehata hi kisi aur ke server pe to hame nahi pata rahta ki us server se answer kab tak aasakta hai to is time pe hum sync code to nahi likh sakate,because agar sync code likha to blocking ho jayegi to is problem ko nipat ne keliye hum async code ka use karte hai,

        async ka main motive hai ki uan cases me jab hame pata nahi ho ki code ka answer kitne time bad aane vala hai to jabhi answer aa jaye to us answer ke respect ke perticular code chala dena hai.


    3) How to know which code we are using like sync or async->

        agar hum niche diye gaye huve words/keyword ham inka use kar rahe hai to ye asynchronous Js ka code hai.
            a)setTimeout()
            b)fetch()
            c)XMLHttpsRequest
            d)promises
            e)setInterval
            f) axios

            example of sync code -> console.log("34");

            example of async code -> setTimeout(function(){
                console.log("hii");
            },1000);

    4) JS is not asyncronous->

        async ka matla ak se jada kam ak sath karna.

        ##-> to JS ak kam ak time pe karti hai HOW??

        Example->

            let suppose,
            ye line1 sync code run ho raha hai.
            ye line2 sync code run ho raha hai.

            ye line3 me Async code run ho raha hai.

            ye line4 sync code run ho raha hai.

            code->
            console.log("hey");
            console.log("hey2");

            setTimeout(function{
                console.log("hey3");
            },0)

            console.log("hey4");

            output-> hey -> hey2 -> hey4 -> hey3
        
        To hota kya hai->

        JS me Two Stack hote hai->

        1) main stack(ms)->

            i)to main stack me upper ke example ke hisab se 'a' main stack me pahile aa jata hai and output me "a" pahile print hoga.

            why?-> because jo bhi sync code hota hai o main stack me output de deta hai.

            to sync code hai to o directly main stack me jake excute hoga ya qunki js ak sync hai.

            ii) second me bhi line2 main stack me aa jayega and print ho jayega.

            iv) third line jo ki async hai to o processing me chala jayega and us vajhse line4 chal jayega aur line4 print hoga.

        2) side stack(ss)->

            side Stack me kya hota hai ki jo bhi async code hota hai o yaha pe behind the scene processing karta hai aur jab answer aaja ye to oo perticular code/ans main stack me bhej diya jata hai execution kye liye.

            iii) Third line me kya hoga kyunki code async hai to o side stack me jayega and processing me lag jaye.

            v)last case me jab main stack khali ho jayega sync code se to "main stack" "side stack" se interact karega ki, 'kya "ss" tumare async code ka answer aagaya kya' and agar "ss" ne kaha 'ha bhai processing ho gaya code ka ans aagaya',tab line3 "main stack" me aa jayega and print/run hojaye ga.


    5) Callbaks->

        callbac ak function hai jo srif tabhi chalta hai jab asyn code ka processing complete ho jaye.

        callback yanii jab async code behind the scene run ho raha hota hai and kisi server/third party se khuchha data laraha hota hai to ak perticular time ke bad o data aajaye ga.

        ye ak hogya scene to o aaya huva data hame kisi ke helps se to lena padega to o data ko retrive karne ke liye hum

        1) callbacks -> normal function jo run hota hai ak perticular time ke bad.
        2) then and catch
        3) async await 

        inka use karte hai.
 */