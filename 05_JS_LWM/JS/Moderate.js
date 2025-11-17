/*
   1) diffrent between let,const and var->
  Js basically do part me divide hai, is ke do new versions hai,ak es5 and es6.
  
  a) var->
        to es5 old version me only 'var' ak hi keyword tha.
        var jo hota hia o function scoped hota hai.
        var pure fuction me kahi pe bhi chal sakta hai.
        var khud ko windows ke sath add karta hai.
        to var khud ko window me add karta hai jisse variable and data expose hota and ye wrong thing hai.
        for(var i=0; i<5; i++){
        console.log(i);
        }
        console.log(i); 
        is case me koi bhi error nahi aayega and code run ho jayega.but i loop ke andar declare hai to o us fun ke bahar run nahi hona chahiye but ho raha hai ye ak problem hai "var" ke sath.   
  
    b) let and const ->
        es6 me do new keyword 'const' and 'let' ko add kiya gaya.
        let,const braces scoped hota hai.
        yani do brases ke ander {} agar let and const define hai to use hum outside of braces use nahi kar sakte.
        let and const khud ko windows ke sath add nahi karte, isse data and variable expose hone se bachta hai.
  
  
  ##<imp> -> JS me kuch cheeje aise hai jo hum use karte hai but o JS me avilable nahi rehate hai aur oo cheeje hame JS se nahi milti browser se milti hai. asi sare feacture jo js ka part nahi hai but fir bhi use karte hai dhoond sakete hai kisi perticular object hum use "windows" kehte hai.
  
  windows object o object hai jisme browser ke feacture hote hai jise JS use karta hai.
  
  EXAMPLE -> 
  alert >> alert jo hai JS ka part nahi hai Js use window se use karti hai. aur bhi hai jaise "console","prompt".
  
  js ka part hai jaise for, if,else,
  
  Browser hame sortedly teen chije deta hai use hi browser context api kahete hai.
  mainly 1) stack 2) window 3) heap memory
  
  2) stack-> stack linearly data ko store karta hai.
  and jo last me ata hai o pahile bahar jata hai use hi last in first out(LIFO) kaha jata hai.
  
  3) heap memory -> jo bhi data and variable hum use karte hai une kahi pe to store karna padta hai program excution ke doran to o store hota hai heap memory me.
  
  
  3) Execution context -> 
  
        hum jabhi function ko create karenge or banayenge to kya hota hai o fucntion khudka  ak imaginary container banaye ga jiseme main tin chije hoti hai:
        1) variables
        2) fucntions inside the parent function.
        3) lexical environment
  
        to jaise hi function chalayenge to execution context banega har bar.
  
        "Lexical environment" hame batata hai ki function ke ander kin cheejon ka access function mil sakta hai.
  
  4) "How to copy refernce values" ->
        to hame na reference values ko copy karne me problem aa rahithi jaise ak arr ko copy ki to useke reference value aa jati agar b value co chage kareto to automatically a ki value change ho jato.
        
        to ye problem hum solve kar sakte hai using "speard operator" ise (...variable) is tarahse likh sakte hai.
        
        ye kya karta hai, samjo hume na a ki value ko copy karna hai b me to using speard operator agar b me ...variable likha to a ki value b me copy hoti hai na ki reference and b ko change karne pe a me changes nahi aayenge.
        ex-> int a []  = {1,2,4,5}
            int b [] = ...a // copy a value to b arr.
  
  
  5) "truthy and falsy" ->
  
        JS me kuch bhi likho o mainly two types me divide hota hai hamesh ak truthy and falsy.
        
        falsy -> falsy values mainly ye values aate hai (false,0,undefined,null,NaN,docmumets.all etc.)
        truthy -> jitne bhi falsy value hai un sab ko chhodke baki sare truthy values hote hai.
        
  6) foreach and forin do-while -> 
  
        a) for each loop->
        for each only arrays pe run hota hai. to jabb bhi array ho to for each loop use hotaa hai.

        forEach ak higher order fucntion hai jo ki khud ak fuctiion hai and ak aur fucntion ko apne inside me accecept kar raha hai aur return bhi kar sakta hai.
  
        let a = [2,3,45,6,8,65,4,45,5,];
            // foreach matlab har ak element keliye in the arr.
            // foreach by default arrays ke values ko change nahi karta o changes array ke copy kiye huve me change karta hai.
         a.forEach(function(kuchBhiLikho){
            console.log(kuchBhiLikho + 10);
        });

        b) for in loop -> 
        for in loop use kiya jata hai object pe loop lagane pe.

        ex-> let obj = {
                name:"Sudhir",
                age:"20",
                city:"Solapur"
            }

            // pahile for aayega fir variable and name aayega 
            // uske bag 'in' apna object aayega.
            for(let key in obj){
                console.log(key,obj[key]);
            }


    7) callback function->

            aisa code jo kuch time ke bad chalta hai to use hum ak fucntion de dete hai to bhai jab chalega tb jana to ye fucntion run karna.

            callback function ye js ka asyn type ka hai.

            callback function ak normal function hi hota hai jo ki kab chalta hai jub kam comlete ho jaye , to kam compelete ho gya hai ab aage chalo iske liye callback function use hota hai.

            callback ak normal function ki tar hi hota hai jo perticular time ke bada chalta hai.

            ex-setTimeout,setInterval
            

    8) first class function->

    JS me ak concept hai ki jisme hum fuctions ko ak value ki tarha bhej sakte hai or as a value use karte hai.

    let abcd() = {
        clg("eh");
    }
        let a = funtion(){}

    9) how arrays made behind the scenes.

    int arr[] = [1,3,45,6,70] this not a arry JS convert it
    like this->
    arr = {
        0:1,
        1:3,
        2:45,
        3:6,
        4:70
    }
        typeof([]) -> object hai.
        typeof({}) -> object hai.

        dono obj hogaye to arr kase check kare, to use ke liye hum aise check karte hai->
        Array.isArray([]->arr)-> true
        Array.isArray({}->obj)-> false
    
    10) delete object props->

    let user = {
        name:"sudhir",
        age:24
    }

    agar yaha pe hame age hatani hai to matlab age ko hatana hai to hum -> {delete user.age} ye likhake delete kar sakte hai.
            
 */

    // console.log(typeof(NaN));
    // -> NaN ka type ye number hota HTMLDetailsElement.

    // console.log(typeof(null));
    // -> null ka type ak object hai.

    // console.log(undefined);
    // -> ud ka type ud hi hota hai.