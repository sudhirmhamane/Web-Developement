/*
        ***IMP**--> what is the methods and function -> 
                agar ak function jo object ke andar ho use hi method kehte hai na ki function.

                ex-> 
                let obj = {
                    batKaro: // ab tak ye batKaro ak property hai. jaise hum iske andar function ko likhade to ye method ban jayega.
                    batKaro: function(){
                    }
                }
 */

/*
    1) Higher Order Function->

        Higher Order fucntion o fucn hote hai jo accept karle apne parameter me ak our fucntion or o function return karde ak aur fucntion use hi higher order fucntion kehate hai.

*/

/*
    2) Constructor fucntion->

        normal fucntion jisme hum this keyword ka use karte hai aur fucntion ko call karte waqt new keyword ka use karte hai use hi constructor fucntion kehte hai.

        jb bhi hamare pas ak aisa mouka ho ki hame ak jasi properties ke bohot sare elements banane ho, so us time hum constructor function ka us kar sakte ha.

        ex-> 
                function sachhaOfBiscut(){
                    this.height = 12;
                    this.weight = 10;
                    this.width = 10;
                }

                    let bis1 = new sachhaOfBiscut();
                    let bis2 = new sachhaOfBiscut();
                    let bis3 = new sachhaOfBiscut();
*/

/*
    3) new Keyword->

        jabhi kisi ke bhe samne new keyword aata hai to ak blanck object hum hamare man me bana sate hai or ak black object ban jata hai.

        constructor function ko call karte time hum new keyword ko use kate hai.

        ex->

            let abcd() = {
                this.age = 12;
            }
                to uper ak higher order function hai to function ke aage agar new keyword lag jaye jaseki to niche jaise code work karta hai.

            new abcd(){
                age: 12;
            }
*/

/*

    4) iife-> immediately invoked fucntion expression:-

        iife ko hum use karete functions ko fastly chalane ke liye.
        iife fucntion private variable banane keliye use kiya jata hai jise and ise koi bhi easily access kar nahi sakta.

        Example-> 

        // iife ko hum is tarhase likh sakte hai.
        // ager iife ke andar variable  ko access karana hai to hum return statements me object me getter and setter ki use se chages kar sakte hai. 

        let answer = (function(){
            let a = 23; // ye function itna fast work karta hai ki call karne ke just bad/ immediately run ho jata hai.
            // iife private variable ko banane me use hota hai to a access hame nahi ml sakta.

            // to ager koi aur chage or update karna chahata hai to hum une alage methods provide karenges so it makes apna code more private .
            return{
                // to uper vale private variable ko access karne keliye hum getter and values set kare keliye setter ka use karte hai.
                // getter and setter are the functions
                getter: function(){
                    console.log(a);
                },
                setter: function(val){
                    a = val;
                }
            };
        })()

        console.log(answer);
 */

/*
    5)Prototypes->


        [[prototype]] kya hai build in helper function and methods cretated by js creater to make apna kam easy.
        
        jab bhi koi object create hota hai to uske pass prototype property automatically aajati hi.

        matlab JS by default har ak object ke andar [[prototype]] add kar deta hai.

        to jabi hum kisi object ko dekhate hai to aakha band kare bol sakte hai ki is object ke pass prototype property avilable hai.

        [[prototype]] ke pass bahot sare helper properties and methods hote hai jis ka use hum hamare taks ko complete karne keliye use karte hai. 
 */

/*
    6) prototypal inheritance ->

        basically inheritance kya hai jo bhi parents ke properties and features hai o pass ho jate hai to their child. to kya hota hai ki same cheeje JS me karni ho to hum prototype se kar sakte hai aur use hi prototypal inheritance khehate hai.

        Example-> 

            let sabKarSakteHai =  { // to is object ka kya kam ho gaya ki ye cheeje sab kar skate hai as a normal human being.
                canFly: false,
                canWalk: true,
                canRun: true
            }

            let viratKarSaktaHai = { 

                yaha pe diya huva kam virat kar sak ta hai but o ak normal human hai and o chal bhi sakta hai, bhag bhi sakta hai.

                to normally upper vale properties hum yaha pe likh sakte the but o ak efficent way nahi hai.

                to upper ke object to inhert karne ke liye hum :->

                **->> viratKarSaktaHai.__proto__ = sabKarSakteHai;

                ye karnese jo sab normally karte hai o virat bhi karne lagega. this is prototypal inheritance.
                runCheseMaster: true,
                badeMatterMeKhada: true
            }
*/

/*
    7) this keyword-> 

        this hamesh apne parent ke values ko refer karta hai.
    
        ex->
        To is example me button pe ak addeventlistener lagaya hai uske andar conslo.log kiya hai to this hamesh apne parent element ko refer karega matlab is ka output "button" aayega.
            let button = document.queryselector('button');
            button.addEventListener('click',function(){
                consol.log(this);
            })

        "Global Scope"->
            jab bhi hum kisi bhi function,object aur scope ke anadar nahi hote hai to us state ko globle state kehte hai.

            ager hum inke inside me hai to us state ko hum local state kehte hai.

            ex->"Global" let a = 32; // to ye kisi bhi fnc or obj ke aadnar nhi hai to hum ise global scope kahenge.

            ex->"local" let abcd = {
                            let a = 23;
                        } // ye abcd() function ke andar hai to ye local scoped variable ho gaya.

        ## VALUES OF THIS IN DIFFRENT LOCATION
        1) IN GLOBAL->
        agar hum GLOBAL SCOPE ke andar console.log(this) karde to o "window" return kar dega.
        2) IN FUNCTION->
        agar hum FUNCTION ke andar console.log(this) karde to o "window" return kar dega.
        3) IN METHODS/OBJECTS-> 
        agar hum METHODS/OBJECTS ke andar console.log(this) karde to o "OBJECT" return kar dega.
 */

/*
    8) call apply and bind-> 


        a) call->
        agar hamare pas ak function and ak object hai and hame o function ko chalana hai and jo this ki value hai function me "window" use "obj" ki taraf point karna hai to hum "call" ko use karte hai.

        ex-> 

            haya pe na ak function abcd hai and iski this ki value ko chage karna hai object me 
            function abcd(){
                clg(this);
            } 

            let user = {
                age: 24
            }

            to hum call ka use karke kar sakte hai.

            abcd.call(user); // ye .call ka use karke this ki value chage kar sakte hai.

        If function me parameters aa jaye to tab kya karna. 

        ex-> 

            function abcd(val1,val2){
                clg(this);
            }

            let obj = {
                age:12
            }

            -> abcd.call(object pahile,badme parameters);

    b) apply ->
        apply me bhi same hi hai call ki tarha but parameter pass karte time hume o array ke andar pass karna padta hia.

        ex->

        function abcd(val1,val2){
                clg(this);
            }

            let obj = {
                age:12
            }

            -> abcd.call(object pahile,[badme parameters]);
    
    c) bind ->
        bind jada tar react me use hota hai.

        bind kay karta hai o funnction and object ko bind kara ta hai and ak naya function hame pass karta hai.

        use istema karne ke liya hame na bind ko a variable me add karna padta hai.

        react me hum jab eventlistener banate hai to vaha pe hume fucntion kucha der bad chalta hai to vaha pe hame bind ka use kar sakte hai.
 */
    

/*
    9) pure and impure fucntion->
        
        agar ak function pure hoto use ke pass ye 2 features hone chaiye.

        1) o function hamesh same output de for same input.
        2) function kabhi bhi change or update na kare global variables ko. 

        ex->
            function abcd(a,b){
                return a*b;
            }

            ans1 = abcd(1,2);
            ans2 = abcd(1,2);

            to uper vala code me dono variable same answer aata hai to is liye ye ak pure function hai.
*/
