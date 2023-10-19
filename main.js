// Angir ulike variabler
let totalPops = 0;
let popsMultiplier = 1;
let multiplyPopsCost = 100;
let popsPerSec = 0;
let popsPerSecCost = 20;
let popValue = 1;
let popValueCost = 1000;
let startBackground = true;

// En funksjon som kjører ti ganger i sekundet
function doPerDeciSec() {
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    let popsPerSecButton = document.getElementById("popsPerSecButton");
    let popValueButton = document.getElementById("popValueButton");

    // Sjekker om brukeren har råd til en oppgradering
    // Gjør dette for hver oppgradering
    if(totalPops >= multiplyPopsCost) {
        // Endrer fargen til knappen til grønn
        multiplyPopsButton.style.backgroundColor = "green";
    } else {
        // Endrer fargen til knappen til rød
        multiplyPopsButton.style.backgroundColor = "red";
    }

    if(totalPops >= popsPerSecCost) {
        popsPerSecButton.style.backgroundColor = "green";
    } else {
        popsPerSecButton.style.backgroundColor = "red";
    }

    if(totalPops >= popValueCost) {
        popValueButton.style.backgroundColor = "green";
    } else {
        popValueButton.style.backgroundColor = "red";
    };
};

//En funksjon som kjører hvert sekund
function doPerSecond() {
    addPop(popsPerSec);
    console.log('perSecond');
}

// Funksjonen når 'pops' skal legges til
function addPop(multiplier) {
    // Henter tekstelementet som viser antall pops
    let popCounter = document.getElementById("popCounter");
    // Øker antall pops med 'multiplier'
    totalPops += popValue * multiplier;
    // Endrer teksten til å stemme med antall pops brukeren har
    popCounter.textContent = `${totalPops} pops`;

    // Første gang funksjonen blir kalt starter det et 'interval' som alltid kjører en funksjon i bakgrunnen
    if(startBackground === true) {
        deciSecInterval = setInterval(doPerDeciSec, 100);
        secInterval = setInterval(doPerSecond, 1000);
        startBackground = false;
    };
};

// Funksjonen som blir alt når spillere selv trykker for 'pops'
function addPopClick() {
    // Kaller 'addpops' funksjonen
    addPop(popsMultiplier);
};

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
    };
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
    };
};

// Funksjon som øker verdien til en 'bloon', gjelder for alle mulige måter man får 'pops' på
function addPopValue() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let popValueButton = document.getElementById("popValueButton");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= popValueCost) {
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= popValueCost;
        popValue += 1;
        popValueCost *= 5;
        // Endrer teksten til å stemme
        popValueButton.textContent = `Bloon is worth more \n +1 pop value \n Cost: ${popValueCost} pops \n Current pop value: ${popValue}`;
        popCounter.textContent = `${totalPops} pops`;
    };
};