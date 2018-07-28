var userScore = 0;
var computerScore = 0;
var count =0;
//DOM vaiables
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
//DOM variables end
// caching the DOM
const scoreResults_div = document.querySelector(".scoreresults");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const lizard_div = document.getElementById("Lizard");
const spock_div = document.getElementById("Spock");

/* I tried adding different ways to try to have an alert pop up saying PLease check your scores to see who one this round, but I am
not successful so far.
*/
/*
$("div").on("click", function(){
    click_count++;
      if(click_count < 3){
          alert ("You have Clicked Three times! Check your score board to see who won!!")
    }
})
*/

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice +  " --     DARN, YOU WIN! ";
/*I was thinking of adding something where a user would click 3 times and then the message would appear. But that
  would be in my mind more build to have the computer tally who wins out of the 3 tries.
  */
    $("#update").click(function(){
        count +=3;
        $("counter").html("Check you score once you have clicked 3 times and see who one!!" +count);
    })
}


function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " loses to " + computerChoice + " --     HA! YOU LOSE! ";
}

function draw(userChoice,computerChoice){
   result_p.innerHTML = computerChoice + " ties with " + userChoice + " --     UH...  TIE!! ";
}

function game(userChoice){
     const computerChoice = getComputerChoice();
      switch (userChoice + computerChoice) {
        case "ScissorsPaper":
        case "PaperRock":
        case "RockLizard":
        case "LizardSpock":
        case "ScissorsLizard":
        case "LizardPaper":
        case "PaperSpock":
        case "SpockRock":
        case "RockScissors":
           win(userChoice,computerChoice)
         break;
        case "PaperScissors":
        case "RockPaper":
        case "LizardRock":
        case "SpockLizard":
        case "LizardScissors":
        case "PaperLizard":
        case "SpockPaper":
        case "RockSpock":
        case "ScissorsRock":
            lose(userChoice,computerChoice)
            break;
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockRock":
        case "LizardLizard":
        case "SpockSpock":
            draw(userChoice,computerChoice)
            break;
    }
}

function listener() {
    rock_div.addEventListener('click', function () {
        game("Rock")
        //console.log("Hey, you clicked on rock");
    })
    paper_div.addEventListener('click', function () {
        game("Paper")
    })
    scissors_div.addEventListener('click', function () {
        game("Scissors")
    })
    lizard_div.addEventListener('click', function () {
        game("Lizard")
    })
    spock_div.addEventListener('click', function () {
        game("Spock")
    })
}

listener();
