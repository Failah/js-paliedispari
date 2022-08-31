console.log('JS OK!');

// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando
// una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta,
// se funziona allora andiamo avanti.


// PALINDROME EXERCISE (tells if an inserted phrase is palindrome or not)

let inputPhrase = prompt('Insert a phrase!');
inputPhrase = inputPhrase.replace(/\s+/g, '').trim(); // removes space at start, at end and in between letters

let reversedPhrase = "";

console.log('The typed phrase is: ' + inputPhrase);

reverseInputPhrase(inputPhrase);

if (inputPhrase === reversedPhrase) {
    console.log('The phrase IS palindrome!')
    alert('The phrase IS palindrome!');
} else {
    console.log('The phrase IS NOT palindrome!')
    alert('The phrase IS NOT palindrome!');
}


// PALINDROME FUNCTION

function reverseInputPhrase(inputPhrase) {

    for (let i = inputPhrase.length - 1; i >= 0; i--) {
        reversedPhrase += inputPhrase[i];
    }

    console.log('The reverted phrase is: ' + reversedPhrase);

    return reversedPhrase;
}