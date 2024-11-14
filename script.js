// EXERCICE 1

// let dessin = "*";
// for (i = 1; i <= 5; i++) {
//   console.log(dessin.repeat(i));
// }

// EXERCICE 2

// const heroes = [
//   "Spider-Man",
//   "Batman",
//   "Wonder Woman",
//   "Iron Man",
//   "Superman",
//   "Captain America",
//   "Black Panther",
//   "Flash",
//   "Hulk",
//   "Thor",
// ];

// heroes.forEach((hero) => {
//     console.log("Mon héro préféré est " + hero)
// })

// EXERCICE 3

// let count = 10;

// while (count >= 0) {
//   console.log(count);
//   count = count - 1;
// }
// console.log("Décollage !");

// EXERCICE 4

// const amis = ["toubo ", "bassem ", "jérémy "];

// for (let index = 0; index < amis.length; index++) {

//     while (amis[index] < amis.length){

//     }
//     console.log( amis[index].repeat(index+1));
//   }

// EXERCICE 5.1

// let iaNumber = 2;
// let userNumber = prompt("Donne un numéro entre 1 et 3 ");

// while ( userNumber != iaNumber || userNumber == iaNumber){
//     if (userNumber == iaNumber){
//         alert("C'est le bon numéro");
//         break
//     }
//     else if (userNumber != iaNumber){
//         alert("Ce n'est pas le bon nombre réessaie");
//         userNumber = prompt("Donne un numéro entre 1 et 3 ");
//     }
// }

// EXERCICE 5.2

// let num = prompt("Donne un nombre")

// while (num < 10 || num > 20){
//     if (num < 10){
//         alert("PLUS GRAND!")
//         num = prompt("Donne un nombre")
//     }
//     else if (num > 20){
//         alert("PLUS PETIT!")
//         num = prompt("Donne un nombre")
//     }
//     else if (num >= 10 || num <= 20) {
//         alert("C'est Bon!")

//     }
// }

// EXERCICE 5.3

// let num = prompt("Donne un numéro a additionner ");
// let count = 0;
// while (count <= 10) {
//   console.log(num);
//   count++;
//   num++;
// }

// EXERCICE 5.4

// let num = prompt("Donne un numéro a additionner ");

// for (i = 0; i <= 10; i++) {
//   console.log(num);

//   num++;
// }

// EXERCICE 5.5

// let nombre = prompt("Donne un nombre");
// let multiple;
// console.log("Table de " + nombre + "\n");

// for (i = 1; i <= 10; i++) {
//   multiple = nombre * i;
//   console.log(+nombre + " x " + i + " = " + multiple);
// }
