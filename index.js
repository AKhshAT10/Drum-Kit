/*
document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("i go clicked !");
}
*/


//can also be done as an Anonymous function
//what to do when click detected


// DETECTING BUTTON PRESS

for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function() 
        {
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
      });}

    
// DETECTING KEYBOARD PRESS
     document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
     });

    function makeSound(key){
        switch (key) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                break;
            case "j":
                var audio =  new Audio("sounds/snare.mp3")
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3")
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                break;
            default: console.log(buttonInnerHTML);
                
    }
    }

    function buttonAnimation(currentKey){
        var activeButton =  document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }


// timeout function
// setTimeout(function(){},millisecons,paramter1..);















/**
  document.addEventListener("keypress",respondToKey(event));
        function respondToKey(event){
        console.log("Key Pressed.");
        }
     here 

     addEventListener is a higher order function 
     respondToKey is a callback function
 */