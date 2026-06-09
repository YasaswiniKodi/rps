 let userScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const moves = document.getElementById("moves");

const userScoreDisplay =
document.getElementById("userScore");

const computerScoreDisplay =
document.getElementById("computerScore");

function playGame(userChoice){

const choices = [
"rock",
"paper",
"scissors"
];

const computerChoice =
choices[Math.floor(Math.random()*3)];

moves.innerHTML =
`You: ${userChoice} | Computer: ${computerChoice}`;

if(userChoice === computerChoice){

result.innerHTML = "🤝 It's a Draw!";

}
else if(

(userChoice==="rock" && computerChoice==="scissors") ||

(userChoice==="paper" && computerChoice==="rock") ||

(userChoice==="scissors" && computerChoice==="paper")

){

userScore++;

userScoreDisplay.innerHTML =
userScore;

result.innerHTML =
"🎉 You Win!";

}
else{

computerScore++;

computerScoreDisplay.innerHTML =
computerScore;

result.innerHTML =
"💻 Computer Wins!";

}
}

function restartGame(){

userScore = 0;
computerScore = 0;

userScoreDisplay.innerHTML = 0;
computerScoreDisplay.innerHTML = 0;

result.innerHTML =
"Choose your move!";

moves.innerHTML = "";

}