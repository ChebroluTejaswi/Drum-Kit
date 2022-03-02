/*
we can also define the funtion at place of handle click.
1st input= what event we should listen to   2nd=  what it should do once detected

for functions the naming should be followed as abcXyz
for constructors the naming should be followed as AbcXyz
*/
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

// when we click on drums
for(var i=0;i<numberOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// when we press the key via keyboard
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


// to play a sound based on user's input
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(buttonInnerHTML);
  }
}

// animation effect for the specific button chosen by user
function buttonAnimation(currentKey)
{
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
