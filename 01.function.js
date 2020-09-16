console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

// fonction additionner
function additionner(nb1, nb2) {
    return nb1+nb2;
}

var resultat1 = additionner(nombre1, nombre2);
console.log(resultat1);


var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
console.log(resultat2);


// fonction multiplication
function multiplication(nb1, nb2){
    return nb1 * nb2;
}

var resultat3 = multiplication(nombre1, nombre2);
console.log(resultat3);


// afficher operation
function afficherOperation(nomOperation, operation, nb1, nb2){
    resultat = operation(nb1, nb2);
    console.log(nomOperation +"(" + nb1 + "," + nb2 + ") =" + resultat);
}

var resultat4 = afficherOperation("Somme", somme, 20, 40);
var resultat5 = afficherOperation("Multiplication", multiplication, 10, 20);

var resultat6 = afficherOperation("Soustraction", (nb1, nb2) => {return nb1-nb2}, 15, 5);


