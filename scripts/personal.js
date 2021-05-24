let label = document.getElementsByTagName("label")[0];
let labelLives = document.getElementsByTagName("label")[2];
let textArea = document.querySelector("textarea");
let startButton = document.getElementsByClassName("btn")[0];
let tryButton = document.getElementsByClassName("btn")[1];
let nextButton = document.getElementsByClassName("btn")[2];
let restartButton = document.getElementsByClassName("btn")[3];
let lives;
let winTextArea = document.getElementsByClassName("mb-3")[0];
let answFeedback = document.createElement('p');



let letters = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];
//----------------------------------------------------------------------------------------------------------------------//

lives = 5;

//Function to start the game
function startGame() {
    let numLet = Math.floor(Math.random() * 8);
    if(letters[numLet] === label.textContent){  //If the letter is the same, the function is called again
        nextQuestion();
    } else {
        label.textContent = letters[numLet];
    }
    labelLives.innerHTML = lives;
    tryButton.removeAttribute("disabled");
    startButton.setAttribute("disabled", '');
    restartButton.removeAttribute("disabled");
}

//Checks if the answer is correct or incorrect
function tryAnswer() {
    let answ = textArea.value;
    if(answ === answers[label.textContent]) {
        answFeedback.innerHTML ="Noiceeeee";
    } else {
        
        answFeedback.innerHTML = "Chavalo baboso";
        lives--;
       
    }
    winTextArea.appendChild(answFeedback);
    nextButton.removeAttribute("disabled");
    tryButton.setAttribute("disabled", '');
    labelLives.innerHTML = lives;
}

//Changes the current letter to the next, without repetition
function nextQuestion() {
    let answ = textArea.value;
    if(lives <= 0 && answ !== answers[label.textContent]) {
        labelLives.innerHTML = "GAME OVER";
        nextButton.setAttribute("disabled", '');
        return;
    }
    startGame();
    nextButton.setAttribute("disabled", '');
    answFeedback.innerHTML = "";
    textArea.value = "";
}

function restartGame() {
    lives = 5;
    labelLives.innerHTML = "---";
    textArea.value = "";
    startButton.removeAttribute("disabled");
}
//Añadir puntaje, botón de finalizar, boton de siguiente pregunta, vidas