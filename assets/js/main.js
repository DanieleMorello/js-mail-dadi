/*
  Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
  stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
 -Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

 -Gioco dei dadi
   Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
   Stabilire il vincitore, in base a chi fa il punteggio più alto.
   -Prima di partire a scrivere codice poniamoci qualche domanda:
   -Che ci sia un array da qualche parte?
   -Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

// STRUMENTI:
// -const/let,
// -prompt,



// LIsta email
const emailList = [
  'pippo@live.it',
  'pluto@live.it',
  'topolino@live.it'
];

// Chiedi all’utente la sua email
const emailEl = prompt('Inserisci la tua email');
console.log('L\'email è: ', emailEl);

let flag = false;
// Controlla che sia nella lista di chi può accedere
for (let i = 0; i < emailList.length; i++) {
  if (emailList[i] === emailEl) {
    flag = true;
  }
  
}

// Stampa un messaggio appropriato sull’esito del controllo
if (flag != 0) {
  console.log('L\' utente può accedere');
} else {
  console.log('L\' utente non può accedere');
}
