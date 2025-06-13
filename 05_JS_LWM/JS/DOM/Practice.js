let cont = document.querySelector('#container');
let love = document.querySelector("i");
let head = document.querySelector('h5');

setTimeout(function(){
    head.innerHTML = '';
},3000);

cont.addEventListener('dblclick',function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.9;
    love.style.color = 'red';
    love.style.cursor = 'pointer';
    setTimeout(function(){
        love.style.opacity = 0;
    },1000);

    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000);
})




// add and remove friend Dom->

// let card1 = document.querySelector('.card');
// let btn = document.querySelector('button');
// let image = document.querySelector('img');
// let heading = document.querySelector('h3');
// let heading2 = document.querySelector('h4');

//     let count = 0;
// btn.addEventListener("click",function(){
    
    
//     if(count == 0){
//         heading2.innerHTML = "Friends";
//         btn.innerHTML = "Remove";
//         btn.style.backgroundColor =  "Green";
//         btn.style.color = "white"
//         heading2.style.color = "green";
//         count = 1;
//     } else {
//         heading2.innerHTML = "Not Friends";
//         btn.innerHTML = "Add Friend";
//         btn.style.backgroundColor = "red"
//         btn.style.color = "black";
//         heading2.style.color = "black";

//     }
    

// })


// btn.innerHTML = "Kharido";
// btn.style.color = "black";
//     let count = 0;
// btn.addEventListener("click",function(){
    
//     image.style.backgroundImage = "bg1.jpg";
//     btn.style.backgroundColor = "green";
//     btn.style.color = "black";


//     if(count == 0){
//         btn.innerHTML = "Nahi Kharidna";
//         heading.innerHTML = "purchesed";
//         count = 1;
//     } else {
//         btn.innerHTML = "KhariDo"
//         btn.style.backgroundColor = "yellow"
//         heading.innerHTML = "Buy Now"
//         count = 0;
//     }
// });


// head.innerHTML = "This change is done by DOM Manipulation.";
// head.style.color = "red";
// head.style.backgroundColor = "yellow";

// function sendMessage() {
//     // alert ("button Clicked");
// }

//  let count = 0;
// button.addEventListener("click",function(){

//     if(count == 0){  
//     head.style.backgroundColor = "black";
//     button.innerHTML = "RESET";
    
//     count = 1;
//     } else {
//         head.style.backgroundColor = "yellow";
//         count = 0;
//     }
// })

