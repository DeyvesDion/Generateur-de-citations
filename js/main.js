// les differentes citations 

let citations = {

    moliere: [

        [
            "Les femmes sont plus ",
            "Votre sexe ",
            "Tout le plaisir ",
            "Tout le secrét ",
            "C'est ainsi qu'un amant "
        ],
        [
            "chastes des oreilles ",
            "n'est là que pour la dépendance ",
            "de l'amour est ",
            "des armes ne consiste qu'en deux choses ",
            "dont l'ardeur est extrême "
        ],
        [
            "que de tout le reste du corps.",
            "du côté de la barbe est la puissance.",
            "dans le changement.",
            "à donner et à ne point recevoir.",
            "aime jusqu'aux défaut des personnes qu'il aime."
        ]
    ]

    ,

    corneille: [

        [
            "Je regarde ce que je perd ",
            "Tous ces défauts humains ",
            "Quinze ans de mariage épuise les paroles ",
            "La faiblesse humaine ",
            "Souvent on entend "
        ],
        [
            "et ne vois point ",
            "nous donnent ",
            "et dépuis un long temps ",
            "est d'avoir des curiosités d'apprendre ",
            "mal ce qu'on croit "
        ],
        [
            "ce qui me reste.",
            "des moyens d'exercer notre philosophie.",
            "nous nous sommes tout dit.",
            "ce qu'on ne voudrait pas savoir.",
            "bien entendre."
        ]

    ]

}
// choix de l'auteur à partir du bouton radio
function getAuteur() {
    let nomAuteur = document.querySelector("input[name = auteur]:checked").value;
    return nomAuteur;
}
// choix du nombre de citation à partir du bouton radio
function getNombreCitation() {
    let nbCitation = document.querySelector("input[name = nbCitations]:checked").value;
    return nbCitation;
}
// fonction pour génerer aléatoirement des citations
function aleatoire(auteur) {
    let phrase = "";
    auteur.forEach(element => {
        phrase += element[Math.floor(Math.random() * element.length)];
    });
    return phrase;
}
// Fonction pour génerer une citation
function generer() {
    let nombreCitation = getNombreCitation();
    let auteur = getAuteur();
    document.getElementById("nomAuteur").innerHTML = "--- Citation de " + auteur;
    document.getElementById("playCitation").innerHTML = "";
    for (let i = 0; i < nombreCitation; i++) {
        document.getElementById("playCitation").innerHTML += "<li>" + "<blockquote>" + aleatoire(citations[auteur]);
    }
}

