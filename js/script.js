// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Chiedo all'utente il numero di chilometri che vuole percorrere
var kmPercorsi = prompt ('Quanti km devi percorrere?');
kmPercorsi = parseInt (kmPercorsi);
console.log(kmPercorsi);

// Chiedo all'utente la sua età
var laTuaEta = prompt ('Inserisci la tua età');
laTuaEta = parseInt (laTuaEta);
console.log(laTuaEta);

// Prezzo biglietto (0.21€ al km)
var prezzoBiglietto = kmPercorsi * 0.21;

// Se l'età è uguale o inferiore a 18 anni, allora si applica uno sconto del 20%
if ( laTuaEta <= 18 ) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.2);
// Se l'età è superiore ai 65 anni, allora si applica uno sconto del 40%
} else if ( laTuaEta > 65) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.4)
} else {
    prezzoBiglietto = prezzoBiglietto
}
console.log(prezzoBiglietto)

// Stampare il prezzo finale con massimo due numeri decimali