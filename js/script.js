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

let inputPhrase = document.getElementById('palindrome-text-area');

let palindromeCheckButton = document.getElementById('palindrome-check-button');

let reversedPhrase = "";

palindromeCheckButton.addEventListener('click',
    function () {
        reverseInputPhrase(inputPhrase.value);
    }
)


// PALINDROME FUNCTION

function reverseInputPhrase(inputPhrase) {

    inputPhrase = inputPhrase.replace(/\s+/g, '').trim(); // removes space at start, at end and in between letters

    console.log('The typed phrase is: ' + inputPhrase);

    for (let i = inputPhrase.length - 1; i >= 0; i--) {
        reversedPhrase += inputPhrase[i];
    }

    console.log('The reverted phrase is: ' + reversedPhrase);

    if (inputPhrase === reversedPhrase) {
        console.log('The phrase IS palindrome!')
        console.log('');
        alert('The phrase IS palindrome!');
    } else {
        console.log('The phrase IS NOT palindrome!')
        console.log('');
        alert('The phrase IS NOT palindrome!');
    }

    inputPhrase.value = '';
    reversedPhrase = '';
}


// NUMBER GAME EXERCISE 

// Pari e Dispari
//
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando
// una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let oddOrEven = '';

let userNumber;

let computerNumber;

oddOrEvenAsk();

chooseUserNumber();


// NUMBER GAME FUNCTIONS

// asks user to select odd or even
function oddOrEvenAsk() {

    oddOrEven = prompt('Choose and type \'odd\' or \'even\'');

    if (oddOrEven !== 'odd' && oddOrEven !== 'even') {
        alert('Please type \'odd\' or \'even\'!');
        oddOrEvenAsk();
    } else {
        console.log('You choose ' + oddOrEven);
    }
}

function chooseUserNumber() {

    userNumber = parseInt(prompt('Pick a number between 1 and 5')).toFixed(0);

    if (0 < userNumber && userNumber < 6) {
        console.log('You picked the number ' + userNumber);
    } else {
        alert('Please pick a number between 1 and 5!');
        chooseNumber();
    }
}

function chooseComputerNumber() {

    alert('Cool, now i will pick a random number between 1 and 5 for me!');

    computerNumber = Math.floor(Math.random() * 5) + 1;

    console.log('The computer picked the number ' + computerNumber);

}