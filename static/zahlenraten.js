// Element body per ID abfragen
const body = document.getElementById("hintergrund");

function changeColor() {
    console.log('Farbe ändern!');
}

// Style von body ändern, wenn er angeklickt wird
body.addEventListener('click', changeColor);
