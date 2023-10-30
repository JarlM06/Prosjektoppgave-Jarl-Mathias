// Angir ulike variabler
let totalPops = 0;
let popsMultiplier = 1;
let multiplyPopsCost = 100;
let dartMonkeys = 0;
let dartMonkeyCost = 20;
let boomerangMonkeys = 0;
let boomerangMonkeyCost = 2000;
let popValue = 1;
let popValueCost = 1000;
let dartCD = 1;
let dartCDCost = 200;
let boomerangCD = 1;
let boomerangCDCost = 4000;
let startBackground = true;

// En funksjon som kjører ti ganger i sekundet
function doPerDeciSec() {
    let multiplyPopsButton = document.getElementById("multiplyPopsButton");
    let dartMonkeyButton = document.getElementById("dartMonkeyButton");
    let boomerangMonkeyButton = document.getElementById("boomerangMonkeyButton");
    let popValueButton = document.getElementById("popValueButton");
    let dartCDButton = document.getElementById("dartCDButton");
    let boomerangCDButton = document.getElementById("boomerangCDButton");

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

    if(totalPops >= boomerangMonkeyCost) {
        boomerangMonkeyButton.style.backgroundColor = "green";
    } else {
        boomerangMonkeyButton.style.backgroundColor = "red";
    }

    if(totalPops >= popValueCost) {
        popValueButton.style.backgroundColor = "green";
    } else {
        popValueButton.style.backgroundColor = "red";
    };

    if(totalPops >= dartCDCost) {
        dartCDButton.style.backgroundColor = "green";
    } else {
        dartCDButton.style.backgroundColor = "red";
    };
    
    if(totalPops >= boomerangCDCost) {
        boomerangCDButton.style.backgroundColor = "green";
    } else {
        boomerangCDButton.style.backgroundColor = "red";
    };
};

//En funksjon som kjører hvert sekund
function dartMonkeyAttack() {
    addPop(dartMonkeys);
    console.log("dart attack");
};

//En funksjon som kjører hvert sekund
function boomerangMonkeyAttack() {
    addPop(boomerangMonkeys * 5);
    console.log("boomerang attack");
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
        dartMonkeyInterval = setInterval(dartMonkeyAttack, (1000 / dartCD));
        boomerangMonkeyInterval = setInterval(boomerangMonkeyAttack, (1000 / boomerangCD));
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
        dartMonkeyCost *= 1.3;
        dartMonkeyCost = Math.round(dartMonkeyCost);
        // Endrer teksten til å stemme
        dartMonkeyButton.textContent = `Dart monkeys pop bloons automatically \n +1 dart monkey \n Cost: ${dartMonkeyCost} pops \n Current amount of dart monkeys: ${dartMonkeys}`;
        popCounter.textContent = `${totalPops} pops`;
    };
};

function addBoomerangMonkey() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let boomerangMonkeyButton = document.getElementById("boomerangMonkeyButton");

    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= boomerangMonkeyCost){
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= boomerangMonkeyCost;
        boomerangMonkeys += 1;
        boomerangMonkeyCost *= 1.5;
        boomerangMonkeyCost = Math.round(boomerangMonkeyCost);
        // Endrer teksten til å stemme
        boomerangMonkeyButton.textContent = `Boomerang monkeys pop 5 bloons at a time \n +1 boomerang monkey \n Cost: ${boomerangMonkeyCost} pops \n Current amount of boomerang monkeys: ${boomerangMonkeys}`;
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
        } else if(popValue === 6) {
            bloonImg.src="Bilder/BlackBloon.png";
        } else if(popValue === 7) {
            bloonImg.src="Bilder/WhiteBloon.png";
        };
    };
};

function reduceDartCD() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let dartCDButton = document.getElementById("dartCDButton");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= dartCDCost) {
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= dartCDCost;
        dartCD += 0.05;
        dartCD = Math.round(dartCD * 100) / 100;
        console.log(dartCD);
        dartCDCost *= 1.2;
        console.log(dartCDCost);
        dartCDCost = Math.round(dartCDCost);
        console.log(dartCDCost);
        // Endrer teksten til å stemme
        dartCDButton.textContent = `Increases dart monkey attack speed \n +5% attack speed \n Cost: ${dartCDCost} \n Current attack speed (per second): ${dartCD}`;
        popCounter.textContent = `${totalPops} pops`;
        // Restarter intervallet som kjører i bakgrunnen
        clearInterval(dartMonkeyInterval);
        dartMonkeyInterval = setInterval(dartMonkeyAttack, (1000 / dartCD));
    };
};

function reduceBoomerangCD() {
    // Henter tekstelementet og knappelementet
    let popCounter = document.getElementById("popCounter");
    let boomerangCDButton = document.getElementById("boomerangCDButton");
    // Sjekker om spilleren har råd til å kjøpe oppgraderingen
    if(totalPops >= boomerangCDCost) {
        // Endrer variabler etter hvordan oppgraderingen funker
        totalPops -= boomerangCDCost;
        boomerangCD += 0.2;
        boomerangCD = Math.round(boomerangCD * 100) / 100;
        console.log(boomerangCD);
        boomerangCDCost *= 1.7;
        console.log(boomerangCDCost);
        boomerangCDCost = Math.round(boomerangCDCost);
        console.log(boomerangCDCost);
        // Endrer teksten til å stemme
        boomerangCDButton.textContent = `Increases boomerang monkey attack speed \n +20% attack speed \n Cost: ${boomerangCDCost} \n Current attack speed (per second): ${boomerangCD}`;
        popCounter.textContent = `${totalPops} pops`;
        // Restarter intervallet som kjører i bakgrunnen
        clearInterval(boomerangMonkeyInterval);
        boomerangMonkeyInterval = setInterval(boomerangMonkeyAttack, (1000 / boomerangCD));
    };
};