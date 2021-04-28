let label = document.querySelector("label");

let letters = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü', 'beta'];
let numLet = Math.floor(Math.random() * 30);

function testPrint() {
    label.textContent = letters[numLet];
}

