/*
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).

- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
 se il numero è presente nella lista dei numeri generati la partita termina altrimenti 
 continua chiedendo all’utente un altro numero.

- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il 
numero massimo possibile di numeri consentiti.

- Al termine della partita il software deve comunicare il punteggio, cioè il numero 
di volte che l’utente ha inserito un numero consentito.
*/


var nMax = 100;  //numeri giocabili
var nBombe = 16; //bombe

var possibilita = nMax - nBombe;
var listabombe = [];
var numeriConsentiti = [];
var utente = 0;

//generazione 16 numeri casuali e univoci

while (listabombe.length < nBombe) {
    var bomba = numeroRandom(max);

   if(! listabombe.includes(bomba)) {
      listabombe.push(bomba);
   } 
}
console.table('Bombe: ',listabombe);

/********/
while ( (numeriConsentiti.length < possibilita) && (! listabombe.includes(utente)) ) {

    //scelta utente
  utente = parseInt(prompt('inserisci un numero da 1 a '+ nMax + '\ntentativi riusciti :' + numeriConsentiti.length + 'di' + possibilita));
   
  while(isNaN(utente) || utente < 1 || utente > nMax) {
    utente = parseInt(prompt('Valore non valido. Inserire un altro numero da 1 a' + nMax));
  }
}
 




//Funzioni

function numeroRandom(max) {
     return Math.floor(Math.random()*max) + 1;
}