/*  
    DOM->

    DOM kya hai Document Object Model.

    DOM ak programming Interface hai jo ki webpages ko manipulate karne me or we say changes or update karne me use hota aur ye sab javascript ke madatse kar sakte hai.

    DOM ak tree like structure hota hai jo ki HTML Documents ko object ke rup me represent karta hai.

    isme webpages ke har ak element ko object banaya jata hai and Javascript ka use karte huye in object/element ko access kar sakte hai and update and changes kar sakte hai.

    DOM KA STRUCTURE ->
    
    Dom ke 'Root' me Document hota hai.

    aur har ak HTML TAg ko/element ko 'Node' banaya jata hai.

    Ex-> 

        ak html ka code hai-
        <h2 class="heading"> I,am a heading </h2>

        js-> me access karne ke liye-

        let heading = document.querySelector('heading');

        heading.innerHTMl = "Hello this is the change";
    
    DOM ek bridge hai jo JavaScript ko web page ke elements ke saath interact karne mein help karta hai. Jab bhi hum apne webpage ko dynamically update karte hain (jaise content change karna ya element ko hide/show karna), hum DOM ka use kar rahe hote hain.


    4 pillor of JS->
        1) selecting the html documents.
        2) changing the html styling
        3) changing the css styling
        4) event listener

 */