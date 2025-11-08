//Ici on utilise use strict, vu en cours dans le slide 51
"use strict";

//Ici on déclare un tableau d'objets, vu en cours dans le slide 40
const students = [
        { id: 1000, lastname: "JOHN", firstname: "DOE", note1: 14, note2: 5 },
        { id: 2000, lastname: "BOB", firstname: "CARLTON", note1: 7, note2: 1 },
        { id: 3000, lastname: "RAYANE", firstname: "SMITH", note1: 13, note2: 3 }
    ];

//Ici on déclare des fonctions, vu en cours dans le slide 45
function A() {
    for (let student of students) {
        const moyenne = (student.note1 + student.note2) / 2 + 5; //Addition et division vu dans le slide 41
        let status; //Ici on déclare une variable vu dans le slide 51
        //Ici on utilise les conditions vu dans le slide 42
        if (B(moyenne)) {
            status = "ADMIS";
        } else {
            status = "AJOURNÉ";
        }
        //Ici on utilise console.log, vu dans le slide 33
        console.log(`${student.id}: ${status}`); //Ici on utilise un affichage formaté, vu dans le slide 37
    }
}

//Ici on déclare des fonctions, vu en cours dans le slide 45
function B (moyenne) {
    return moyenne >= 10 ; 
}