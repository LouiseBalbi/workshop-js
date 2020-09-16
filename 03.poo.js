function personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom + " " + this.prenom + ", pseudo : " + this.pseudo
    }
}

var jules = new personne('LEMAIRE', 'Jules', 'Jules77');
var paul = new personne('LEMAIRE', 'Paul', 'Paul14');

function afficherPersonne(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

// modifier pseudo jules
jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

//Ajouter une propriété à Personne
console.log(jules.age);
personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

//Ajouter une méthode à Personne
personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + ". " + this.nom.charAt(0) + ".";
}
console.log(jules.getInitiales());

//Objet sans fonction constructeur
var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + " " + this.prenom + ", pseudo : " + this.pseudo
    }
};

afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client(numeroClient, nom, prenom, pseudo) {
    personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfo = function () {
        return this.prenom + " " + this.nom + " " + this.numeroClient;
    }
}


var steve = new Client('A01', 'Steve', 'LUCAS', 'steve44');

afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());
