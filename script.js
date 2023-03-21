let userChoice;
let compChoice;
let compScore = 0;
let userScore = 0;
let userImg = document.getElementById("user--img");
let compImg = document.getElementById("comp--img");
let showUserScore = document.getElementById("user--score");
let showcompScore = document.getElementById("comp--score");
let result = document.getElementById("result");
let imgArr = ["images/rock.png", "images/paper.png", "images/scissor.png"];
function rock() {
  game();
  userChoice = "rock";
  userImg.setAttribute("src", imgArr[0]);
}
function paper() {
  game();
  userChoice = "paper";
  userImg.setAttribute("src", imgArr[1]);
}
function scissor() {
  game();
  userChoice = "scissor";
  userImg.setAttribute("src", imgArr[2]);
}
function comp() {
  let compNum = Math.floor(Math.random() * 3);
  let path = imgArr[compNum];
  switch(compNum) {
    case 0:
      compChoice = "rock";
      compImg.setAttribute("src", imgArr[0]);
      break;
    case 1:
      compChoice = "paper";
      compImg.setAttribute("src", imgArr[1]);
      break;
    case 2:
      compChoice = "scissor";
      compImg.setAttribute("src", imgArr[2]);
      break;
  }
}


function score() {
  if (userChoice === "rock" && compChoice === "paper") {
    //comp won
    compScore += 1;
    showcompScore.innerText = compScore;
    showUserScore.innerText = userScore;
    result.innerText = "Computer Win";
  } else if (userChoice === "paper" && compChoice === "scissor") {
    //comp won
    compScore += 1;
    showcompScore.innerText = compScore;
    showUserScore.innerText = userScore;
    result.innerText = "Computer Win";
  } else if (userChoice === "scissor" && compChoice === "rock") {
    //comp won
    compScore += 1;
    showcompScore.innerText = compScore;
    showUserScore.innerText = userScore;
    result.innerText = "Computer Win";
  } else if (userChoice === compChoice) {
    //Its a tie
    compScore += 0;
    showcompScore.innerText = compScore;
    showUserScore.innerText = userScore;
    result.innerText = "It's a Tie";
  } else {
    //user won
    userScore += 1;
    showcompScore.innerText = compScore;
    showUserScore.innerText = userScore;
    result.innerText = "User Win";
  }
}

function game() {
  comp();
  score();
}
