//CAMPO MINATO CON DIFFICOLTA'

var livelloDiDifficolta = impostaLivelloDiDifficolta();

giocaCon(livelloDiDifficolta);

// FUNZIONI
function generaNumeroPositivoCon(maxNum) {
  return Math.ceil(Math.random() * maxNum);
}

function impostaLivelloDiDifficolta() {
  return parseInt(prompt('Inserisci un livello di difficoltà:\n-0(Facile: scegli numeri da 1 a 100)\n-1(Medio: scegli numeri da 1 a 80)\n-2(Difficile: scegli numeri da 1 a 50)'));
}

function generaNumeriVietatiPer(numeroMassimoEstraibile) {

  var maxNumeriVietati = 16;
  var numeriVietati = [];

  for (var i = 0; i < maxNumeriVietati; i++) {

    var numeroEstratto = generaNumeroPositivoCon(numeroMassimoEstraibile);

    if (numeriVietati.indexOf(numeroEstratto) == -1) {
      numeriVietati.push(numeroEstratto);
    } else {
      i--;
    }
  }

  console.log(numeriVietati);

  return numeriVietati;
}

function numeroMassimoEstraibilePer(livelloDiDifficolta) {

  var numeroMassimo;

  switch (livelloDiDifficolta) {
    case 0 : numeroMassimo = 100;
    break;
    case 1 : numeroMassimo = 80;
    break;
    case 2 : numeroMassimo = 50;
    break;
  }

  return numeroMassimo;
}

function giocaCon(livelloDiDifficolta) {

  var numeroMassimoEstraibile = numeroMassimoEstraibilePer(livelloDiDifficolta);

  alert('CAMPO MINATO.\nLivello Di Difficoltà: ' + livelloDiDifficolta + '\nIl computer genera 16 numeri casuali da 1 a ' + numeroMassimoEstraibile + '.\nDovrai inserire un numero da 1 a ' + numeroMassimoEstraibile + ' alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti potrai inserire un altro numero.\nLa partita termina quando inserisci un numero vietato o raggiungi il numero massimo possibile di numeri consentiti.\nAl termine della partita vedrai il tuo punteggio.');

  var numeriVietati = generaNumeriVietatiPer(numeroMassimoEstraibile);
  var numeriCorrettiEstraibiliDallUtente = numeroMassimoEstraibile - 16;
  var numeriEstrattiDallUtente = [];
  var punteggio = 0;
  var puoiContinuare = true;

  while (numeriEstrattiDallUtente.length <= numeriCorrettiEstraibiliDallUtente && puoiContinuare) {

    var messaggioUtente;

    if (numeriEstrattiDallUtente.length > 0) {
      messaggioUtente = 'Finora hai estratto: ' + numeriEstrattiDallUtente + '\nIl tuo punteggio è: ' + punteggio + '\nInserisci il tuo numero da 1 a ' + numeroMassimoEstraibile;
    } else {
      messaggioUtente = 'Che il gioco inizi!\nBuona Fortuna\nInserisci il tuo numero da 1 a ' + numeroMassimoEstraibile;
    }

    var numeroUtente = parseInt(prompt(messaggioUtente));

    if (numeroUtente > 0 && numeroUtente <= numeroMassimoEstraibile){
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

  alert('hai perso selezionando: ' + numeroUtente + '\nPunteggio di: ' + punteggio );

}
