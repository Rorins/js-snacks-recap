/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

/*Chiediamo 1 parola e poi l'altra*/

 const parola1 = prompt("inserire parola");
 const parola2 = prompt("inserire parola");

 /*Prima stampiamo parola corta e poi lunga*/
 if (parola1.length <parola2.length){
     console.log(`${parola1} ${parola2}`);
 }else {
     console.log(`${parola2} ${parola1}`);
 }