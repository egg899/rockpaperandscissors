
//User choice
var userChoice = prompt("Rock, paper or scissors, man?");

//to turn it into lowercase
if(userChoice != null){
  userChoice = userChoice.toLowerCase();
  
}
//User choices
if(userChoice ==="rock" || userChoice ==="paper" ||userChoice ==="scissors"){
  
  
   
  
  $("#user").fadeIn(1000);
  $("#user").removeClass(userChoice).addClass(userChoice);
 
  
}
else{
  alert("Whaaaaaaaaaaaaaaattt???");
}

 


//Computer Choices
var options = ['rock', 'paper', 'scissors'];
var randomNum = Math.floor(Math.random() * options.length );
var computerChoice = options[randomNum];


if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors'){
  
  
   
  $("#computer").fadeIn();
  $("#computer").removeClass(computerChoice).addClass(computerChoice);
  //$("#computer").animate({left: '50px'});
  
  
}


 
  
  //Comparing function to see who won
function compare(choice1,choice2){
  if(choice1===choice2){
    $("#winner").html('<h1>'+'It\'s a tie' + '</h1>');
  }
  else if(choice1 ==='rock'){
    if(choice2 === 'scissors'){
       $("#winner p").text('You win');
    }
    
    else{
       $("#winner p").text('Computer wins');
    }
  }//rock choice
  
  else if(choice1==='paper'){
    if(choice2==='rock'){
       $("#winner p").text('You win');
    }else{
     $("#winner p").text('Computer wins');
    }
    
  }//paper choice
  
  else if(choice1==='scissors'){
    if(choice2 ==='rock'){
      $("#winner p").text('Computer wins');
    }else{
     $("#winner p").text('You win');
    }
  }//scissors choice
  
  
  else if(userChoice == null || userChoice == 0|| userChoice== undefined|| userChoice != "rock" || userChoice != "paper" || userChoice != "scissors" ){
    $("#computer").fadeIn();
     $("#user").fadeIn();
    $("#user").addClass("house");
  $("#computer").removeClass(computerChoice).addClass("beavis");
    $("#winner").html('<h1>'+'Are you thzreatening me?!!!' + '</h1>');
  }
}

compare(userChoice, computerChoice);