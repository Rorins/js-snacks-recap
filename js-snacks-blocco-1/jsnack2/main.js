/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while  */

/*Contatore per sommare numeri*/
let somma = 0;

 /* Richiesta di inserimento per 5 volte di un numero*/
 for(let i=0; i< 5; i++){
   const numero = parseInt(prompt("inserisci un numero"));
/*il numero si sommerà man mano a 0*/
    somma += numero;
 }
 console.log(somma)

/* Con while*/
while (i<5){
   const numero = parseInt(prompt("inserisci un numero"));
   /*il numero si sommerà man mano a 0*/
       somma += numero;

   /* Incremento contatore per evitare un loop infinito*/
       count++;
}