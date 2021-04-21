let a = prompt("premier chiffre")
let b = prompt("deuxieme chiffre")
if (a == b) {
    alert("Le nombre " + a + " et le nombre " + b + " sont ils égaux? oui")
}
else
alert("Le nombre " + a + " et le nombre " + b + " sont ils égaux? non")

let c = prompt("Premier chiffre");
let d = prompt("Deuxième chiffre");
if (c < d) {
    alert("Le nombre " + c + " est-il plus petit que le nombre " + d + " ? oui")
}
else 
alert("Le nombre " + c + " est-il plus petit que le nombre " + d + " ? non");

let e = prompt("Premier chiffre");
let f = prompt("Deuxième chiffre");
let g = prompt("Troisième chiffre");
let h = e + f;
if (h > g)
    alert("La somme du nombre " + e + " + le nombre " + f + " est-elle plus grande que le nombre " + g + "? " + true)
else 
    alert("La somme du nombre " + e + " + le nombre " + f + " est-elle plus grande que le nombre " + g + "? " + false)

    //4
// let phrase = prompt("Tape un 16");
// let estimation = prompt('A combien de caractère estime tu que ta phrase contienne');
// if (estimation == phrase.length) {
//     alert('Tu es un génie');
// } else {
//     alert(`tu étais à ${Math.abs(estimation - phrase.length)} de la bonne réponse`);
// }

//5
// let prenom = prompt('Entrez votre prenom');

// if (prenom == "") {
//     prenom = prompt('attention vous devez remplir le champs ci-dessus !!!');
//     if (prenom == "") {
//         alert('va te faire enculé');
//     } else {
//         alert(`Bonjour ${prenom}`)
//     }
// } else {
//     alert(`Bonjour ${prenom}`)
// }

//6
// let question = confirm("Veux-tu t'abonner");

// if (question == true) {
//     question = prompt("quelle formule voulez vous prendre : Luxe ou Normal");
//     if (question == "luxe") {
//         alert('Félicitation vous avez choisis la formule Luxe !');
//     } else {
//         alert('Merci pour votre abonnement.');
//     }
// } else {
//     question = prompt('Etes vous certain ?');
//     if (question == "oui") {
//         alert("c'est dommage et souhaiter lui une bonne journée");
//     } else {
//         question = prompt("quelle formule voulez vous prendre : Luxe ou Normal");
//         if (question == "luxe") {
//             alert('Félicitation vous avez choisis la formule Luxe !');
//         } else {
//             alert('Merci pour votre abonnement.');
//         }
//     }
// }

//7
// let question = prompt('Quel est capital de la Belgique ?');
// let question2 = prompt('Qui est bg dans la coding 18 ?');
// let reponse = "brussels";
// let reponse2 = 'loic';

// if (question != reponse && question2 != reponse2) {
//     alert("t'es mzi !!!");
// } else if (question != reponse && question2 == reponse2) {
//     alert('tu as echoué, la réponse fausse est la question 1');
// } else if (question == reponse && question2 != reponse2) {
//     alert('tu as echoué, la réponse fausse est la question 2');
// } else {
//     alert('felicitation');
// }

//8
//let reservation = prompt('Entrez votre age pour la reservation');
// var aujd = new Date(); // var year = aujd.getFullYear();
// remplacer reservation dans les conditions et mettre aujd-reservation

// if (reservation > 100) {
//     alert('vous êtes encore vivant ? Évitez de voir ce film pour le rester.');
// } else if (reservation <= 0) {
//     alert('vous n’êtes même pas nés, n’essayez pas de tricher');
// } else if (reservation < 18) {
//     alert('vous êtes mineur, l’accès est réservé aux grands');
// } else if (reservation == 18) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant");
// } else if (reservation >= 18) {
//     alert('vous êtes majeur, vous pouvez réserver');
// }

//9
// let x = confirm("est-ce que vous êtes riche ?");
// let y = confirm("voulez-vous partir en vacance ?");
// let z = confirm("est-ce que vous avez un chat ?");

// if (y != true) {
//     alert('pas de problème ne partez pas en vacance');
// } else if (x != true || z != false) {
//     alert("Même si vous le voulez, vous ne pouvez pas partir.");
// } else if (x != false && z != true && y != false) {
//     alert("Tout est parfait, partez en vacance !");
// } else if (x != false && z != true) {
//     alert("Vous pourriez partir en vacance si vous le voulez");
// }
//bonus
// else if ((x != false || z != true) || y != false) {
//     alert("Tout est parfait, partez en vacance !");
// } 