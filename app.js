let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div =document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputetrChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if( letter==="r") return "Rock";
  if( letter ==="p") return "Paper";
  return "Scissors";
}

function win(user , computer){
  userScore++;
  //userScore_span.innerText = userScore;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_div.innerHTML = `${convertToWord( user )}${ smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You Win!🔥`; //emojipedia.org
  userChoice_div.classList.add('green_glow');
  setTimeout( () => userChoice_div.classList.remove('green_glow')  ,500  );
}

function lose(user , computer){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_div.innerHTML = `${convertToWord( user )}${ smallUserWord} loses ${convertToWord(computer)}${smallCompWord}. You Lost!😞`;
  userChoice_div.classList.add('red_glow');
  setTimeout( () => userChoice_div.classList.remove('red_glow')  ,500  );
}

function draw(user , computer){

  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_div.innerHTML = `${convertToWord( user )}${ smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a draw!🤗`;
  userChoice_div.classList.add('gray_glow');
  setTimeout( () => userChoice_div.classList.remove('gray_glow')  ,500  );
}


function game(userChoice) {
  const computerChoice = getComputetrChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice , computerChoice);
      break;
    case 'rp':
    case 'sr':
    case 'ps':
      lose(userChoice , computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice , computerChoice);
      break;

  }
}

function main() {
  rock_div.addEventListener('click', () => game("r") );
  paper_div.addEventListener('click',() => game("p") );
  scissors_div.addEventListener('click', () => game("s") );
}
main();
