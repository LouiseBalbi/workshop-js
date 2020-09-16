var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
// afficher tableau
villes.forEach(element => console.log(element));

// evrey
var a = "a";
function contientA(ville){
    if(ville.includes(a)){   
    return true
}
}

console.log("lettreADansToutesLesVilles = " + villes.every(contientA));

console.log('/////////////////////')
// some
var tiret = "-";
function contientTiret(ville){
    if(ville.includes(tiret)){   
    return true
}
}

console.log("auMoinsUneVilleAvecUnTiret = " + villes.some(contientTiret));

console.log('/////////////////////')
// filter
var tiret = "-";
var espace = " ";
function contientTiretOuEspace(ville){
    if(ville.includes(tiret) || ville.includes(espace)){   
    return false;
}else{
    return true;
}
}
var villesSansTiretSansEspace = villes.filter(contientTiretOuEspace);
villesSansTiretSansEspace.forEach(element => console.log(element));

console.log('/////////////////////')
// chainer les fonctions

function villeMaj(ville){
    return ville.toUpperCase();
}
function terminantParS(ville){
    return ville.endsWith('s');
}

var villesMajusculeSeTerminantParS = villes.filter(terminantParS).map(villeMaj);
villesMajusculeSeTerminantParS.forEach(element => console.log(element));