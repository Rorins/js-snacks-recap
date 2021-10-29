/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array*/

/*Creo array vuoto*/
const arr = [];

/*Chiedo per 6 volte all'utente di inserire un numero*/
for(let i=0; i< 6; i++){
numero = parseInt(prompt("Inserisci numero"));
/*controllo se è dispari per inserirlo nell'array*/
if (numero % 2 !== 0){
    arr.push(numero);
    console.log(arr)
}
}

