// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const pariDispari = prompt("pari o dispari?")

const userNum= Number(prompt("Scegli un numero da 1 a 5: "))

// Generate a number between 1 and parameter number, including the parameter
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

const computerNum = generateRandomInteger(5)

//funzione se è dispari
function IsDispari(numero)
{
   if (numero %2 == 1){
    return true

   }else {
    return false
   }
   

}

//se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
if (IsDispari(userNum + computerNum)){

    //è dispari

    if (pariDispari === "dispari"){
        console.log("Congratulazioni, hai vinto");
    } else{
        console.log("Mi dispiace, hai perso");
    }


} else{
    //è pari
    if (pariDispari === "pari"){
        console.log("Congratulazioni, hai vinto");
    } else{
        console.log("Mi dispiace, hai perso");
    }
}