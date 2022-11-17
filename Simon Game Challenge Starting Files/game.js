var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function (){

  var userChosenColour = $(this).attr("id");
  
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
});


function nextSequence(){
  var n = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[n];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}


function playSound(name){
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
}, 100);
}