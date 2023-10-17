// Angir ulike variabler
let totalPops = 0;
let popsMultiplier = 1;
let multiplyPopsCost = 100;
let popsPerSec = 0;
let popsPerSecCost = 20;
let startBackground = true;

// En funksjon som alltid skal kjøre i bakgrunnen
function backgroundFunction() {
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    let popsPerSecButton = document.getElementById("popsPerSecButton");
    // Sjekker om brukeren har råd til en oppgradering
    if(totalPops >= multiplyPopsCost) {
        // Endrer fargen til knappen til grønn
        multiplyPopsButton.style.backgroundColor = "green";
    } else {
        // Endrer fargen til knappen til rød
        multiplyPopsButton.style.backgroundColor = "red";
    }
    // Sjekker om brukeren har råd til en oppgradering
    if(totalPops >= popsPerSecCost) {
        // Endrer fargen til knappen til grønn
        popsPerSecButton.style.backgroundColor = "green";
    } else {
        // Endrer fargen til knappen til rød
        popsPerSecButton.style.backgroundColor = "red";
    }
}

// Funksjonen når 'pops' skal legges til
function addPop(multiplier) {
    // Henter tekstelementet som viser antall pops
    let popCounter = document.getElementById("popCounter");
    // Øker antall pops med 'multiplier'
    totalPops += multiplier;
    // Endrer teksten til å stemme med antall pops brukeren har
    popCounter.textContent = `${totalPops} pops`;
    // Første gang funksjonen blir kalt starter det et 'interval' som alltid kjører en funksjon i bakgrunnen
    if(startBackground === true) {
        setInterval(backgroundFunction, 100);
        startBackground = false;
    }
};

// Funksjonen som blir alt når spillere selv trykker for 'pops'
function addPopClick() {
    // Kaller 'addpops' funksjonen
    addPop(popsMultiplier);
}

// Funksjon som øker antall 'pops' man får fra hvert klikk
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

// Funksjon som øker antall 'pops' man automatisk får i sekundet
function addPopPerSec() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let popsPerSecButton = document.getElementById("popsPerSecButton");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= popsPerSecCost){
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= popsPerSecCost;
        popsPerSec += 1;
        popsPerSecCost *= 1.5;
        popsPerSecCost = Math.round(popsPerSecCost);
        // Endrer teksten til å stemme
        popsPerSecButton.textContent = `+1 pop per second \n Cost: ${popsPerSecCost} pops \n Current pops per second: ${popsPerSec}`;
        popCounter.textContent = `${totalPops} pops`;
        // Setter et intervall som kjører funksjonen 'addPop' hvert sekund
        setInterval(addPop, 1000, 1);
    }
};