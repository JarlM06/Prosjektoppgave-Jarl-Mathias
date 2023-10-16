// Angir ulike variabler
let totalPops = 0;
let popsMultiplier = 1;
let multiplyPopsCost = 20;

// Funksjonen når 'pops' skal legges til
function addPop() {
    // Henter tekstelementet som viser antall pops
    let popCounter = document.getElementById("popCounter");
    // Øker antall pops med 1
    totalPops += popsMultiplier;
    // Endrer teksten til å stemme med antall pops brukeren har
    popCounter.textContent = `${totalPops} pops`;
};

function multiplyPops() {
    let popCounter = document.getElementById("popCounter");
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    if(totalPops >= multiplyPopsCost) {
        totalPops -= multiplyPopsCost;
        popsMultiplier += 1;
        multiplyPopsCost *= 2;
        multiplyPopsButton.textContent = `+1 pop per click \n Cost: ${multiplyPopsCost} pops \n Current pops per click: ${popsMultiplier}`;
        popCounter.textContent = `${totalPops} pops`;
    }
};