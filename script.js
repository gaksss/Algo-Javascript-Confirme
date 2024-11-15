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

// EXERCICE 5.6

// let nombre = prompt("Donne un nombre");
// let somme = 0;
// for (i = 1; i <= nombre; i++) {
//   somme = somme + i;
// }
// console.log(somme);

// EXERCICE 5.7

// let nombre = prompt("Donne un nombre");
// let multiple = 1;
// for (i = 1; i <= nombre; i++) {
//   multiple = multiple * i;
// }
// console.log(multiple);

// EXERCICE 5.8

// let chiffres = [];

// for (i = 1; i <= 20; i++) {
//   let num = Number(prompt("Donne un chiffre :"));
//   chiffres.push(num);
// }

// let compare = chiffres[0];
// for (i = 0; i <= chiffres.length - 1; i++) {
//   if (chiffres[i] > compare) {
//     compare = chiffres[i];
//   }
// }
// console.log("Le nombre le plus grand est " + compare);

// EXERCICE 5.9

// let chiffres = [];

// for (i = 1; i > 0; i++) {
//   let num = Number(prompt("Donne un chiffre :"));
//   chiffres.push(num);
//   if (num == 0) {
//     break;
//   }
// }

// let compare = chiffres[0];
// for (i = 0; i <= chiffres.length - 1; i++) {
//   if (chiffres[i] > compare) {
//     compare = chiffres[i];
//   }
// }
// console.log("Le nombre le plus grand est " + compare);

// EXERCICE 5.10

// let panier = 55;
// let client = Number(
//   prompt("Le panier est de " + panier + " combien donnez vous?")
// );
// let billets10 = 0;
// let billet5 = 0;
// let piece1 = 0;
// let rendu = 0;

// if (client < panier) {
//   alert("Ce n'est pas assez!");
// } else if (client == panier) {
//   alert("Merci bonne journée!");
// } else {
//   rendu = client - panier;
//   while (rendu >= 10) {
//     billets10++;
//     rendu -= 10;
//   }
//   if (rendu >= 5) {
//     billet5++;
//     rendu -= 5;
//   }
// }

// alert(
//   "Je vous rends " +
//     billets10 +
//     " billets de 10, " +
//     billet5 +
//     " billets de 5 et " +
//     rendu +
//     " pièces de 1"b
// );

// EXERCICE 5.11

let n = prompt("Donne un nombre de chevaux partants");
let p = prompt("Donne un nombre de chevaux joués");
let factorN = 1;
let factorP = 1;
let factorNP = 1;
let np = n - p;
let X;
let Y;

// FACTORIELLE DE N
for (i = 1; i <= n; i++) {
  factorN = factorN * i;
}

// FACTORIELLE DE P
for (i = 1; i <= p; i++) {
  factorP = factorP * i;
}

// FACTORIELLE DE (N - P)

for (i = 1; i <= np; i++) {
  factorNP = factorNP * i;
}

// CALCUL
X = factorN / factorNP;
Y = factorN / (factorP * factorNP);

console.log("Dans l'ordre : une chance sur " + X + " de gagner");
console.log("Dans le désordre : une chance sur " + Y + " de gagner");
