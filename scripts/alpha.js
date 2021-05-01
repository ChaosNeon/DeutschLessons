//Variable Declaration
let label = document.querySelector("label");
let textArea = document.querySelector("textarea");
let nextButton = document.getElementsByClassName("btn")[2];
let lives;
let winTextArea = document.getElementsByClassName("mb-3")[0];
let answFeedback = document.createElement('p');
let tryButton = document.getElementsByClassName("btn")[1];

let letters = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü', 'beta'];
//----------------------------------------------------------------------------------------------------------------------//

//Function to start the game
function startGame() {
    lives = 5;
    let numLet = Math.floor(Math.random() * 30);
    if(letters[numLet] === label.textContent){  //If the letter is the same, the function is called again
        nextQuestion();
    } else {
        label.textContent = letters[numLet];
    }
    tryButton.removeAttribute("disabled");
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
    console.log(lives);
}

//Changes the current letter to the next, without repetition
function nextQuestion() {
    startGame();
    nextButton.setAttribute("disabled", '');
    answFeedback.innerHTML = "";
    textArea.value = " ";
}


//Añadir puntaje, botón de finalizar, boton de siguiente pregunta, vidas