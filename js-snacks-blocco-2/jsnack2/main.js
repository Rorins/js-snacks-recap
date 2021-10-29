/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
Javascript - JS JSnack 3*/

const nomi = ["Mario", "Luigi", "Peach", "Toad"];
const cognomi= ["Arzulli", "Magalli", "Abbondanza"];
const invitati = 3

/* Ciclo per 3 volte per generare 3 invitati*/
for(let i=0; i< invitati; i++){
const randPositionNom = Math.floor(Math.random() * nomi.length);
const randPositionCogn = Math.floor(Math.random() * cognomi.length);
console.log(nomi[randPositionNom], cognomi[randPositionCogn]);
}