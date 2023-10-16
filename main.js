// Angir ulike variabler
let totalPops = 0;

// Funksjonen når 'pops' skal legges til
function addPop() {
    // Henter tekstelementet som viser antall pops
    let popCounter = document.getElementById("popCounter");
    // Øker antall pops med 1
    totalPops += 1;
    // Endrer teksten til å stemme med antall pops brukeren har
    popCounter.textContent = `${totalPops} pops`;
}