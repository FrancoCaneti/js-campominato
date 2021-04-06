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


/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente 
che cambia il range di numeri casuali:

-con difficoltà 0 => tra 1 e 100

-con difficoltà 1 => tra 1 e 80

-con difficoltà 2 => tra 1 e 50
*/

var nMax = 100;  //numeri giocabili
var nBombe = 16; //bombe

var possibilita = nMax - nBombe;
var listabombe = [];
var numeriConsentiti = [];
var utente = 0;

//Bonus: scelta difficoltà

var livello = parseInt(prompt('Scegli la difficoltà').trim() );

while(isNaN(livello) || livello < 0 || livello > 2 ) {
   livello = parseInt( prompt('Scegli la difficoltà da 0 a 2 ').trim());
}

switch (livello ) {
  case 0:
    nMax = 100;
    break;

  case 1:
    nMax = 80;
    break;
  
  case 2:
    nMax = 50;   
}

possibilita = nMax - nBombe;

//generazione 16 numeri casuali e univoci

while (listabombe.length < nBombe) {
    var bomba = numeroRandom(nMax);

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
  console.log(utente);

//controllo numero bomba/ numero vittoria

if(listabombe.includes(utente) ){
  alert('You lose '+ numeriConsentiti.length + ' tentativi prima di trovare la bomba');
 
 } else if (numeriConsentiti.includes(utente)){
   alert('numero già inserito, riprova');
 
 } else if (! numeriConsentiti.includes(utente)) {
   numeriConsentiti.push(utente);
 }
 
 //controllo numero massimo raggiungibile
 if(numeriConsentiti.length === possibilita) {
   alert ('You win');
 }

}
 //game over

 console.log('--Game Over--');
 console.log('lista numeri vincenti: ', numeriConsentiti);
 console.log('Tentativi riusciti: ', numeriConsentiti.lenght);



//Funzioni

function numeroRandom(max) {
     return Math.floor(Math.random()* max ) + 1;
}