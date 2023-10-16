// Angir ulike variabler
let totalPops = 0;
let popsMultiplier = 1;
let multiplyPopsCost = 20;
let startBackground = true;

// En funksjon som alltid skal kjøre i bakgrunnen
function backgroundFunction() {
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    // Sjekker om brukeren har råd til en oppgradering
    if(totalPops >= multiplyPopsCost) {
        // Endrer fargen til knappen til grønn
        multiplyPopsButton.style.backgroundColor = "green";
    } else {
        // Endrer fargen til knappen til rød
        multiplyPopsButton.style.backgroundColor = "red";
    }
}

// Funksjonen når 'pops' skal legges til
function addPop() {
    // Henter tekstelementet som viser antall pops
    let popCounter = document.getElementById("popCounter");
    // Øker antall pops med 1
    totalPops += popsMultiplier;
    // Endrer teksten til å stemme med antall pops brukeren har
    popCounter.textContent = `${totalPops} pops`;
    // Første gang knappen blir trykket starter det et 'interval' som alltid kjører en funksjon i bakgrunnen
    if(startBackground === true) {
        setInterval(backgroundFunction, 100);
        startBackground = false;
    }
};

function multiplyPops() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= multiplyPopsCost) {
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= multiplyPopsCost;
        popsMultiplier += 1;
        multiplyPopsCost *= 2;
        // Endrer teksten til å stemme
        multiplyPopsButton.textContent = `+1 pop per click \n Cost: ${multiplyPopsCost} pops \n Current pops per click: ${popsMultiplier}`;
        popCounter.textContent = `${totalPops} pops`;
    }
};