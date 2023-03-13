// Mail Bonus
//  -Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
// LIsta email
const emailList = [
  'pippo@live.it',
  'pluto@live.it',
  'topolino@live.it'
];

// Selezione il form nella DOM
const formEl = document.querySelector('form');

// Selezioniamo l' input email 
const emailEl = document.getElementById('email');

// Selezione il bottone 
const btnEl = document.querySelector('button');

const mex = document.querySelector('.messaggio');



formEl.addEventListener('submit', function(e) {
  e.preventDefault()
  // console.log('CLICK');
  console.log(emailEl.value);
  let flag = false;
  if (emailEl.value === "") {
    mex.innerHTML = "Per favore inserisci una email";
  } else {
    for (let i = 0; i <= emailList.length; i++) {
      // console.log(emailList[i]);
      // console.log(`Email inserita: ${emailEl} Email della lista: ${emailList[i]}`);
      if (emailEl.value === emailList[i]) {
        flag = true;
      }
    }
    
    if (flag) {
      mex.innerHTML = "Accesso consentito";
    } else {
      mex.innerHTML = "Accesso negato";
    }
  }

}); 

