// ***************** 1st project



// let isstatus = document.querySelector("h5");
// let btn = document.querySelector("#Add");

// let check = 0;

// btn.addEventListener("click", function(){
//     if(check == 0){
//         isstatus.innerHTML = "Friends";
//         isstatus.style.color = "Green";
//         btn.innerHTML = "Remove Friends";
        
//         check = 1
//     }else{
//         isstatus.innerHTML = "stranger";
//         isstatus.style.color = "red";
//         btn.innerHTML = "Add Friends";
        
        
//         check = 0;
//     }

    
    
// });



// ******************** 2nd

var cont = document.querySelector("#container");

var heart = document.querySelector("i");

cont.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50% , -50%) scale(1)"
    heart.style.opacity = 0.8;
    heart.style.color = "red"

    setTimeout( function(){
        heart.style.opacity = 0;
    }, 1000)

    setTimeout( function(){
         heart.style.transform = "translate(-50% , -50%) scale(0)"
    }, 2000)
    

    
});

setTimeout
