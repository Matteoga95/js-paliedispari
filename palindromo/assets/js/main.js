// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("Inserisci la parola da verificare: ")



function palindrome(str) {
    // Step 1. Lowercase la stringa e uso delle rgx per rimuovere caratteri non desiderati
    var re = /[\W_]/g;
    //tolgo gli eventuali caratteri non desiderati dalla stringa come  punti caratteri speciali etc etc
    var lowRegStr = str.toLowerCase().replace(re, '');


    // Step 2. uso i metodi delle stringhe per dividere la stringa con lo split, invertirla di ordine, e poi riunirla tutta in ordine invertito
    var reverseStr = lowRegStr.split('').reverse().join('');


    // Step 3. Controllo se la stringa passata come parametro è uguale a quella invertita sopra e ritorno il valore true o false
    return reverseStr === lowRegStr;
}

//faccio l'if e dico all'utente se la parola è un palindormo oppure no

if (palindrome(userWord)){
    console.log("Congratulazioni, la parola è un palindromo");
} else {
    console.log("Mi dispiace la parola non è un palindromo");
}