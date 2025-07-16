// Element body per ID abfragen
const body = document.getElementById("hintergrund");
const tipp = document.getElementById("tipp");
const inputZahl = document.getElementById("input-zahl");
const buttonRaten = document.getElementById("button-raten");
const versuche = document.getElementById("versuche");

// zufällige Zahl zwischen 1 und 100 generieren
const zahl = Math.floor(Math.random() * 100) + 1;

// Anzahl der Leben
let leben = 5;

// Funktion zum Raten einer Zahl
function zahlRaten() {
    if (!inputZahl.checkValidity()) {
        // Input ist nicht valide
        alert('Es muss eine Zahl zwischen 1 und 100 eingegeben werden.');
    } else {
        // Input ist valide: Zahl überprüfen
        const geraten = inputZahl.value;
        if (geraten == zahl) {
            // Geratene Zahl war richtig!
            tipp.innerHTML = "Erraten! Die Zahl war: " + zahl;
        } else {
            // Falsch geraten
            if (leben == 0) {
                // Verloren
                tipp.innerHTML = "Du hast verloren! Die Zahl war: " + zahl;
                buttonRaten.setAttribute("disabled", true);
                buttonRaten.style.background = 'gray';
                return;
            }
            leben--;
            versuche.innerHTML = "Du hast noch " + leben + " Versuche!";
            if (geraten < zahl) {
                // Geratene Zahl ist zu niedrig
                tipp.innerHTML = "Deine Zahl ist: zu niedrig!";
            } else {
                // Geratene Zahl ist zu hoch
                tipp.innerHTML = "Deine Zahl ist: zu hoch!";
            }
        }
    };
}

// Event-Listener zum Knopf hinzufügen
buttonRaten.addEventListener('click', zahlRaten);