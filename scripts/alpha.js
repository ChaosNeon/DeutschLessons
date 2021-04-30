let label = document.querySelector("label");
let textArea = document.querySelector("textarea");
let nextButton = document.getElementsByClassName("btn")[2];
let lives;

let letters = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü', 'beta'];

//Function to start the game
function startGame() {
    lives = 5;
    let numLet = Math.floor(Math.random() * 30);
    label.textContent = letters[numLet];
}

//Checks if the answer is correct or incorrect
function tryAnswer() {
    let answ = textArea.value;
    if(answ === answers[label.textContent]) {
        console.log("Noiceee");
    } else {
        console.log("Chavalo baboso");
    }
    nextButton.removeAttribute("disabled");
}

//Changes the current letter to the next, without repetition
function nextQuestion() {
    let numLet = Math.floor(Math.random() * 30);
    if(letters[numLet] === label.textContent){  //If the letter is the same, the function is called again
        nextQuestion();
    } else {
        label.textContent = letters[numLet];
    }
    nextButton.setAttribute("disabled", '');
}


//Añadir puntaje, botón de finalizar, boton de siguiente pregunta, vidas