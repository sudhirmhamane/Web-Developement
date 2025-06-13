/* 

    1)word aur keyword me kya farkh hai?

        word- jaise ki sudhir,sham,ram ye word o word hai jinka JS me koi bhi matlab nahi hai.
          
        keyword- keyword yani for,if,while,else,let ye jo sare words hai inka JS se bahot matlab hai ye reserve words hote hai JS me aur ine hi keyword kahete hai.
*/

/*
    2)let,var aur const?

        var- var JS me a variable hota hai jise kisi bhi values ko store karme use kiya jata hai.var ki value hum change kar sakte hai. iski value change ho sakti hai.

        const- const JS me data store karne keliye hi use hota hai but the const ki value hamesh constant hoti hai kabhi bi change nahi hoti.

    A) var example->

    var dhula = "sham";
    var dhulhan = "seema";
    console.log(dhula + " weds " + dhulhan);
    // output-> sham weds seema
    // ya ha pe var keyword ka use huva hai jo ki change ho sakta hai.

    var dhula = "rohan";
    console.log(dhula + " weds " + dhulhan);
    // output-> rohan weds seema
    // so yaha pe dhula badl gaya easily.

    B) const example->
    const dhula1 = "raman";
    const dhulhan1 = "shama";
    console.log(dhula1 + " weds " + dhulhan1);
    // output-> raman weds shama
    // yaha pe agar hum value change karne ko jaye to hame error milega beacuse
    // const ki value change nahi hoti.

    dhula1 = "gotya";
    console.log(dhula1 + " weds " + dhulhan1);
    // output-> Assignment to constant variable.

*/

/* 
    3) hoisting?

        hoisting yani kisi bhi variable ko banane se pahile hi use karna.

        example->

        let a = 29;

        to kya hota hai js uper vale code ko do part me divide karta hai.
        yani let a; and a= 29;
        to let a; ye ak decleration hai and isko JS top of the code me send karta hai.

    
    console.log(a);
    let a = 10;
    console.log(a);
*/

/*
    4) primitive and reference->

        a) reference-> yani aisi koi bhi value jisko copy karne pe real value copy nahi hoti hai and use main vlaue ka reference pass hota hai use hi reference kaha jata hai.

        b) primitive-> aisi koi bhi value jisko copy karne ke bad real value copy ho jati hai us value ko primitive type kaha jata hai.

        # ager code me kahi pe bhi brackets hai yani {},[] and () to ye ak reference type hai. and iske alava koi bhi ho oo primitive type ka hota hai.
        ex-> let a = "edkd" this is primitive.
        ex-> let b = [1,3,4,5,6] this is reference
            ager hum let b = a; kare to a ka reference b ke pass chala jata hai 
*/

/*
    5) Conditional Statements -> 

        conditional statements are the if-else , else-if

        ye if-else tab use hota hai jab hame koi condition check karni ho.
        if-else me yato true or false do value hi aa sakte hai.

        example-> 

        if(a > b){
            // run this condition
        } else {
            // otherwise run this condition
         }
 */

/*
    6) Loops->

        agar hame kuch kam bar bar karna pad raha hai to us kam ko hum loop ki use se asanise kar sakte hai aur easy way me.

        ex-> suppose hame 1 se 120 number print karna hai to 
        for(let i=1; i<=120; i++){
            console.log(i);
        }
        
        let i = 1
        while( i <= 120) {
        console.log(i);
        }
            
 */

/*
    7) functions->

        functions mainly teen kam keliye use hote hai->

        a) jab hame apna code turant nahi chalana hota hai future me chalana hai to function ka use karte hai.

        b) jab hum apna code reuse karna chahte hai tab use hota hai.

        c) jab hame apna code chalana hota hai har bar with diffrent code to functions ka use hota hai.

        fucntions me do tar ke values hote hai.

        ak hota hai 'parameters' -> yani ye variables hote hai jinme values store hote hai arguments ke.
        ak hota hai 'arguments' -> yani ye values real values hote hai joki user enter karta hai fucntion ko use karte huve.

        function chaiBanao(){
            console.log("St-1: pahile ak patila gas chalu karke us par rakh do");
            console.log("St-2: bad me use me pani,chini aur chaipatti dalo");
            console.log("St-3: use mixture ko 3 se 5 min tak gas pe ubalo");
            console.log("St-4: ubalne ke bad use me yogya matrame dudh dalo");
            console.log("St-5: aur last me majese biscute ke sath khao.")
        }
        chaiBanao();
 */

/*
    8) Arrays->

        hum ak variable me ak hi value ko store kar sakte hai agar hame multiple values ko store karna hai to hame arrays ka use kar sakte hai. array hame freedom deta hai ak se jada values ko use ya store karne me joki ak types ke data,values hone chahi ye.
        
        array ye ak collections of same data types hote hai.

        hum array ko ak bar define kare to usme changes nahi kar sakte.
        
        arrays in js me indexing 0 se start hoti hai.

        ex-> let arr[] = [2,4,5,78,9];

 */

/*
    9) push pop unshift and shift splice->

        agar hamare pass arr hai and use me kuch chages karne hai to hum in values ko use karte hai.

        example->

        let arr[] = [1,2,3,4,5];

        1) push-> hume agar arr me ending me value ko push karna hai to push ka use karte hai

            arr.push(6);
            output-> [1,2,3,4,5,6];
        
        2) pop-> last ka value nikalna hai to use hota hai.

            arr.pop();
            arr.pop()
            console.log(arr)
            o/p-> [1,2,3,4,5]
        
        3) unshift-> arr ke starting me value ko add kane ke liye use hota hai

            arr.unshift(34);
        
        4) shift-> arr ke starting se ak value ko hatane key liye shift use hota hao

            let arr = [1,2,3,4,5];
            arr.shift();
            arr.shift();
            console.log(arr);
            output-> [3,4,5]
        
        5) splice-> agar hame arr me se ak koi specific value ko hata na hai to ye use hota hai. 
            arr.splice(2,1)
 */

/*
    10) object->
        ek se jada bande ki bat ki to arrays huva, and ak bande ke bareme sari bat ki to huva object.
        object ak bande ki details ko hold karta hai.
 

        const user = {
            username: "Sudhir",
            emailId: "sudhir123@gmail.com",
            age: '23',
            position: "software engineer"
        }

        console.log(user.age);
        console.log(user.position);
*/
