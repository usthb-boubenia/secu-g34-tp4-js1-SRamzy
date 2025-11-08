//Ici on utilise use strict, vu en cours dans le slide 51
"use strict";

//Ici on déclare un tableau de chaines de caractères, vu en cours dans le slide 38
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

//Ici on déclare un objet, vu en cours dans le slide 39
const objetEtudiant = { 
  nom: "John", 
  prenom: "DOE", 
  age: 30 
};

//Ici on déclare un tableau d'objets, vu en cours dans le slide 40
const tableauObjetsEtudiants = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
    //Ici on utilise une boucle for...of, vu en cours dans le slide 44
    for(let etudiant of tableauEtudiants){
        //Ici on utilise console.log, vu dans le slide 33
        console.log(etudiant);
    }
}

function f2() {
  //Ici on utilise console.log, vu dans le slide 33
  console.log(objetEtudiant);
}

function f3() {
    //Ici on utilise une boucle for...of pour parcourir le tableau d'objets, vu en cours dans le slide 44
    for (let etudiant of tableauObjetsEtudiants) {
      //Ici on utilise console.log, vu dans le slide 33
      console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age); //Ici on utilise un affichage élaboré, vu dans le slide 37
    }
}


