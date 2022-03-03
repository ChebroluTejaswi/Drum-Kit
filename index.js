var numberOfDrumButtons=document.querySelectorAll(".drum").length;
let sequence=[];


// when we click on drums
for(var i=0;i<numberOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    sequence.push(buttonInnerHTML);
    var seq="";
    for(let j=0;j<sequence.length;j++)
    {
        seq=seq+"  "+String(sequence[j]).toUpperCase();
    }
    document.getElementById("sequence").innerHTML=seq+" |";
  });
}

// when we press the key via keyboard
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
  sequence.push(event.key);
  var seq="";
  for(let j=0;j<sequence.length;j++)
  {
    seq=seq+"  "+String(sequence[j]).toUpperCase();
  }
  document.getElementById("sequence").innerHTML=seq+" |";
});


// to play a sound based on user's input
function makeSound(key){
    // console.log(sequence.toString());
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

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const playSequence = async () => {
  for (let i = 0; i < sequence.length; i++) {
    await sleep(500)
    makeSound(sequence[i]);
    buttonAnimation(sequence[i]);
  }
}

function clearsequence(){
    sequence=[];
    console.log(sequence);
    document.getElementById("sequence").innerHTML="|";   
}


