/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generare un numero random da 1 a 6
// const randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);

let user = Math.floor(Math.random() * 6);
console.log(user);
let pc = Math.floor(Math.random() * 6);
console.log(pc);

if (user > pc) {
  console.log('Complimenti hai vinto!!!');
} else if (user < pc) {
  console.log('Hai perso!!!');
} else {
  console.log('Pareggio!!!');
}