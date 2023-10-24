// Angir ulike variabler
let totalPops = 0;
let popsMultiplier = 1;
let multiplyPopsCost = 100;
let dartMonkeys = 0;
let dartMonkeyCost = 20;
let popValue = 1;
let popValueCost = 1000;
let popCD = 1;
let popCDCost = 200;
let startBackground = true;

// En funksjon som kjører ti ganger i sekundet
function doPerDeciSec() {
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    let dartMonkeyButton = document.getElementById("dartMonkeyButton");
    let popValueButton = document.getElementById("popValueButton");
    let popCDButton = document.getElementById("popCDButton");

    // Sjekker om brukeren har råd til en oppgradering
    // Gjør dette for hver oppgradering
    if(totalPops >= multiplyPopsCost) {
        // Endrer fargen til knappen til grønn
        multiplyPopsButton.style.backgroundColor = "green";
    } else {
        // Endrer fargen til knappen til rød
        multiplyPopsButton.style.backgroundColor = "red";
    }

    if(totalPops >= dartMonkeyCost) {
        dartMonkeyButton.style.backgroundColor = "green";
    } else {
        dartMonkeyButton.style.backgroundColor = "red";
    }

    if(totalPops >= popValueCost) {
        popValueButton.style.backgroundColor = "green";
    } else {
        popValueButton.style.backgroundColor = "red";
    };

    if(totalPops >= popCDCost) {
        popCDButton.style.backgroundColor = "green";
    } else {
        popCDButton.style.backgroundColor = "red";
    };
};

//En funksjon som kjører hvert sekund
function dartMonkeyAttack() {
    addPop(dartMonkeys);
};

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
        dartMonkeyInterval = setInterval(dartMonkeyAttack, (1000 / popCD));
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
function addDartMonkey() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let dartMonkeyButton = document.getElementById("dartMonkeyButton");

    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= dartMonkeyCost){
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= dartMonkeyCost;
        dartMonkeys += 1;
        dartMonkeyCost *= 1.5;
        dartMonkeyCost = Math.round(dartMonkeyCost);
        // Endrer teksten til å stemme
        dartMonkeyButton.textContent = `Dart monkeys pop bloons automatically \n +1 dart monkey \n Cost: ${dartMonkeyCost} pops \n Current amount of dart monkeys: ${dartMonkeys}`;
        popCounter.textContent = `${totalPops} pops`;
    };
};

// Funksjon som øker verdien til en 'bloon', gjelder for alle mulige måter man får 'pops' på
function addPopValue() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let popValueButton = document.getElementById("popValueButton");
    let bloonImg = document.getElementById("bloonImg");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= popValueCost) {
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= popValueCost;
        popValue += 1;
        popValueCost *= 5;
        // Endrer teksten til å stemme
        popValueButton.textContent = `Bloon is worth more \n +1 pop value \n Cost: ${popValueCost} pops \n Current pop value: ${popValue}`;
        popCounter.textContent = `${totalPops} pops`;
        // Bytter bildet til 'bloon' etter hvor mye den er verdt
        if(popValue === 2) {
            bloonImg.src="Bilder/BlueBloon.png";
        } else if(popValue === 3) {
            bloonImg.src="Bilder/GreenBloon.png";
        } else if(popValue === 4) {
            bloonImg.src="Bilder/YellowBloon.png";
        } else if(popValue === 5) {
            bloonImg.src="Bilder/PinkBloon.png";
        }
    };
};

function reducePopCD() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let popCDButton = document.getElementById("popCDButton");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= popCDCost) {
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= popCDCost;
        popCD += 0.05;
        popCD = Math.round(popCD * 100) / 100;
        console.log(popCD);
        popCDCost *= 1.2;
        console.log(popCDCost);
        popCDCost = Math.round(popCDCost);
        console.log(popCDCost);
        // Endrer teksten til å stemme
        popCDButton.textContent = `Increases dart monkey attack speed \n +5% attack speed \n Cost: ${popCDCost} \n Current attack speed (per second): ${popCD}`;
        popCounter.textContent = `${totalPops} pops`;
        // Restarter intervallet som kjører i bakgrunnen
        clearInterval(dartMonkeyInterval);
        dartMonkeyInterval = setInterval(dartMonkeyAttack, (1000 / popCD));
    };
};