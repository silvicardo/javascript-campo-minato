// EASY CAMPO MINATO

var numeriVietati = [];

var maxNumeriVietati = 16;

numeriVietati.push(generaNumeroPositivoCon(100));

for (var i = 1; i < maxNumeriVietati; i++) {

  var numeroEstratto = generaNumeroPositivoCon(100);

  if (numeriVietati.indexOf(numeroEstratto) == -1) {
    numeriVietati.push(numeroEstratto);
  } else {
    i--;
  }
}

console.log(numeriVietati);

alert("CAMPO MINATO.\nIl computer genera 16 numeri casuali da 1 a 100.\nDovrai inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti potrai inserire un altro numero.\nLa partita termina quando inserisci un numero vietato o raggiungi il numero massimo possibile di numeri consentiti.\nAl termine della partita vedrai il tuo punteggio.");

var numeriEstrattiDallUtente = [];
var punteggio = 0;
var puoiContinuare = true;

while (numeriEstrattiDallUtente.length <= 84 && puoiContinuare) {

  var messaggioUtente;

  if (numeriEstrattiDallUtente.length > 0) {
    messaggioUtente = 'Finora hai estratto: ' + numeriEstrattiDallUtente + '\nIl tuo punteggio è: ' + punteggio + '\nInserisci il tuo numero da 1 a 100';
  } else {
    messaggioUtente = 'Che il gioco inizi!\nBuona Fortuna\nInserisci il tuo numero da 1 a 100';
  }

  var numeroUtente = parseInt(prompt(messaggioUtente));

  if (numeroUtente > 0 && numeroUtente <= 100){
    if (numeriVietati.indexOf(numeroUtente) == -1) {
      if (numeriEstrattiDallUtente.indexOf(numeroUtente) == -1) {
        numeriEstrattiDallUtente.push(numeroUtente);
        console.log(numeriEstrattiDallUtente);
        punteggio++;
      } else {
        alert('Hai già estratto il numero ' + numeroUtente);
      }
    } else {
      puoiContinuare = false;
    }
  } else {
    alert('Hai Inserito un numero non Valido!');
  }

}

alert('hai perso con un punteggio di: ' + punteggio );

// FUNZIONI
function generaNumeroPositivoCon(maxNum) {
  return Math.ceil(Math.random() * maxNum);
}
