
	
    let computerPoints = 0;
    let playerPoints = 0;
    let round = 0;
    let arrayOption=["✊ Rock","✋ Paper","✌ Scissors"];
    let computerSelected;

    $(".Rock").on("click", playerSelection);
    $(".Paper").on("click", playerSelection);
    $(".Scissors").on("click", playerSelection);
    
    $("button").on("click", playRound );

function playerSelection(){
      
    if($(this).hasClass('Rock')) {
        playerSelection = 'rock';
         $(".playerPosition").html('<img src="img/rock.svg" />').css("background-color", "#ef9553");
    } if ($(this).hasClass('Paper')) {
        playerSelection = 'paper';
        $(".playerPosition").html('<img src="img/paper.svg" />').css("background-color", "#ef9553");
    } if ($(this).hasClass('Scissors')) {
        playerSelection = 'scissors';
        $(".playerPosition").html('<img src="img/scissors.svg" />').css("background-color", "#ef9553");

    }

    
    return playerSelection;

};


function computerSelection(){
 let lucky = Math.floor(Math.random() * 3);
    
    if (lucky == 0){
        computerSelected = 'rock';
        $(".computerPosition").html('<img src="img/rock.svg" />').addClass("transform");
    } else if (lucky == 1){
        computerSelected = 'paper';
        $(".computerPosition").html('<img src="img/paper.svg" />').addClass("transform");
    } else{
        computerSelected = 'scissors';
        $(".computerPosition").html('<img src="img/scissors.svg" />').addClass("transform");
    }
        return computerSelected; 
    }


function playRound(){
computerSelection();
round++;
 /*round*/
if((playerSelection == 'rock' && computerSelected == 'scissors') || (playerSelection == 'paper' && computerSelected == 'rock') || (playerSelection == 'scissors' && computerSelected == 'paper')){
    playerPoints++;
      
} else if ((playerSelection == 'rock' && computerSelected == 'paper') || (playerSelection == 'paper' && computerSelected == 'scissors') || (playerSelection == 'scissors' && computerSelected == 'rock')){
    computerPoints++;

} else if (playerSelection == computerSelected){
   //nothin happen

}

 /*posts*/

$(".computer").html(computerPoints);
$(".me").html(playerPoints);
$(".round").html(round);

/*winner*/

if(round == 5){
    if(computerPoints > playerPoints){
      hide();
      $(".scene").html("<h2 style='margin-top: 130px'>😢 You Lose </h2>").css({"background-color": "#50b5af", "color": "white"});
       end();
    } else{
        hide();
     $(".scene").html("<h2 style='margin-top: 130px'>😀You Win!!!</h2>").css({"background-color": "#ef9553", "color": "white"});
        end();
    }
}


}

function hide(){
    $(".buttons").hide();
    $(".playerPosition").hide();
    $(".computerPosition").hide();
    $(".tittles").hide();
    $(".score").hide(); 
    $("h3").hide(); 
}

function end() {            // Create element with HTML  
  var txt = $("<button id='final'></buttom>").text("Play again!").css({"background-color": "#333", "color": "white", "width": "100px", "padding": "10px","margin":"auto"});   // Create with jQuery
  $(".scene").append(txt);      // Append the new elements 

$('#final').click(function() {
    location.reload();
});

}