// Element body per ID abfragen
const body = document.getElementById("hintergrund");

let blau = true;

function changeColor() {
    console.log('Farbe ändern!');

    if (blau) { body.style.background = "#E97C49"; } 
    else { body.style.background = "#4c96ad"; }
    
    blau = !blau;
}

// Style von body ändern, wenn er angeklickt wird
body.addEventListener('click', changeColor);
