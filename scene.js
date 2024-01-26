// Déclaration class sequence 
class Sequence {
    // constructor de class 
constructor(chapitre, story ,imageUrl, choice) {
    this.chapitre= chapitre;
    this.story= story;
    this.image= imageUrl;
    this.choice= choice; }
// function d'affichage a l'ecran 
    display() {
        const chapitreElement = document.getElementById("Chapitre");
        const storyElement = document.getElementById("story");
        const imageElement = document.getElementById("image");
        const choiceElement = document.getElementById("choice");

        chapitreElement.innerHTML = this.chapitre;
        storyElement.innerHTML = this.story;

// Affichage de l'image
        if (this.image) {
            imageElement.src = this.image;
            imageElement.style.display = 'block'; // s'assurez que l'image est visible
        } else {
            imageElement.style.display = 'none'; // Cache l'image si aucune URL n'est fournie
        }
// boucle de tous les choix 
        choiceElement.innerHTML = this.choice.map(option => {
            return `<button onclick="changeSection(${option.next})">${option.text}</button>`;
        }).join('  ');
    }
}
// creation section des séquance 
const sections = [
    // Sequence 00 
    new Sequence(
        "Le Grimoire Mystérieux",
        "Dans le royaume enchanté de Valombre, vous êtes Léandre, un apprenti magicien.</br> Votre maître, le sage Elzar, a mystérieusement disparu, laissant derrière lui un grimoire crypté et des énigmes.</br></br> Votre mission est claire : retrouver Elzar et percer les secrets de Valombre.</br></br> Face à vous, le grimoire semble vous appeler.",
        "\image/grimoire-ouvert.jpg",
        [
            { text: "Ouvrir le grimoire.", next: 1 },
            { text: "Enquêter dans le village.", next: 2 }
        ]
    ),
    //sequence 01 
    new Sequence(
        "Les Secrets du Grimoire",
        "En ouvrant le grimoire, vous découvrez des pages remplies de sorts inconnus et de récits de lieux mystérieux ainsi qu'une carte étoilée.</br> Un marque-page attire votre attention, indiquant un sort de localisation.",
        "\image/125830999_o.jpg",
        [
            { text: "Étudier la carte étoilée.", next: 3 },
            { text: "Lire le livre.", next: 4 }
        ]
    ),
    //sequence 02
    new Sequence(
        "Les Rumeurs du Village",
        "Vous décidez d'enquêter dans le village. Les villageois parlent d'une lumière étrange dans la forêt la nuit dernière.</br> Certains évoquent une ancienne légende, d'autres craignent qu'il s'agisse d'un mauvais présage.",
        "\image/5094450.png",
        [
            { text: "Explorer la forêt.", next: 5 },
            { text: "Chercher plus d'informations auprès des villageois.", next: 6 }            
        ]
    ),
     //sequence 03
    new Sequence(
        "La Piste Cachée",
        "Le livre vous mène à une grotte secrète.</br> À l'intérieur, vous trouvez des indices sur la dernière destination d'Elzar.",
        "\image/decouvrez-l-histoire-cachee-du-prieure-a-travers-un-jeu-de-piste-photo-progres-1661252241.jpg",
        [
            { text: "Suivre les indices.", next: 7 },
            { text: "Retourner au village pour préparer une expédition. ", next: 2 }            
        ]
    ),
     //sequence 04
    new Sequence(
        "Les Arcanes Oubliés",
        "Le grimoire révèle un passage secret dans la tour d'Elzar, menant à une pièce cachée remplie d'artefacts magiques.",
        "\image/Tarot-de-Marseille-les-signification-des-22-Arcanes-majeurs.jpg",
        [
            { text: "Examiner les artefacts.", next: 8 },
            { text: "Rechercher des indices sur Elzar dans la pièce.", next: 13 }            
        ]
    ),
     //sequence 05
    new Sequence(
        "La Forêt Enchantée",
        "La forêt est dense et pleine de mystères. Vous trouvez un ancien autel avec des inscriptions.",
        "\image/enchanted-forest.jpg",
        [
            { text: "Déchiffrer les inscriptions.", next: 9 },
            { text: " Continuer à explorer la forêt.", next: 10 }            
        ]
    ),
     //sequence 06
    new Sequence(
        "Le Secret des Villageois",
        "Vous découvrez que les villageois cachent un passage vers un temple ancien sous le village.",
        "\image/les-villageois-le-secret-d-un-groupe-folklorique-qui-marche-1524516045.jpg",
        [
            { text: "Explorer le temple.", next: 12 },
            { text: "Confronter les villageois avec cette découverte", next: 11 }            
        ]
    ),

    /************************************************ Fin alternative  *********************/
     //sequence 07
    new Sequence(
        "Le Dévoilement Final",
        "Votre quête vous a mené à un croisement de vérités et de révélations. Ici, le voile se lève sur le destin d'Elzar et les secrets longtemps enfouis de Valombre. Ce que vous découvrez remet en question tout ce que vous pensiez savoir, éclairant votre chemin d'une lumière nouvelle et inattendue.</br> Vous devez résoudre une énigme pour accéder au vérité de ce monde",
        "\image/Rotator-8f.jpg",
        [
            { text: "Résoudre l'énigme ", next: 14 }
        ]
    ),
     //sequence 08
    new Sequence(
        "L'Artefact Magique",
        "En examinant les artefacts dans la pièce secrète, vos doigts effleurent une sphère luminescente.</br> Elle s'illumine, révélant un artefact ancien : le Globe de Luméa, capable d'illuminer la vérité cachée derrière les illusions.</br> Vous comprenez alors que certains mystères de Valombre ne sont que des mirages, créés pour détourner l'attention des vrais secrets du royaume.",
        "\image/sphere-cristal-rougeoyante-illumine-ciel-nocturne-hiver-genere-abstraitement-par-ia_188544-30438.avif",
        [
            { text: "Recommencer votre aventure ! ", next: 0 }
        ]
    ),
     //sequence 09
    new Sequence(
        "L'Ancien Secret",
        "Après avoir déchiffré les inscriptions sur l'autel de la forêt, une réalité oubliée se révèle à vous. Valombre était autrefois un carrefour pour les magiciens de tous les mondes.</br> Ce secret, perdu dans le temps, explique la concentration élevée de magie dans la forêt.</br> Vous réalisez que vous avez le pouvoir de restaurer Valombre à son ancienne gloire.",
        "\image/téléchargement.jpeg",
        [
            { text: "Recommencer votre aventure ! ", next: 0 }
        ]
    ),
     //sequence 10
    new Sequence(
        "La Rencontre Mystique",
        "En explorant plus profondément la forêt, vous tombez nez à nez avec une créature mythique :</br> un dragon ailé aux écailles scintillantes. </br>Au lieu de cracher du feu, il vous parle de sagesse ancienne et de connaissances oubliées.</br> Cette rencontre change votre perception de la magie et de votre propre destinée.",
        "\image/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        [
            { text: "Recommencer votre aventure ! ", next: 0 }
        ]
    ),
     //sequence 11
    new Sequence(
        "Le Complot du Village",
        "En confrontant les villageois avec votre découverte du passage secret, la vérité éclate.</br> Le village était le gardien d'un ancien temple, protégeant un secret qui pourrait bouleverser l'équilibre du monde.</br> Les villageois, craignant les conséquences de cette révélation, avaient juré de garder le temple caché à tout prix.",
        "\image/Jeu-de-piste-Cour-Saint-Emilion.jpeg",
        [
            { text: "Explorer l'ancien temple ", next: 12 }
        ]
    ),
     //sequence 12
    new Sequence(
        "Le Trésor Caché",
        "L'exploration du temple ancien sous le village vous mène à une chambre scellée, où repose un trésor inestimable : la Couronne de Solara, un artefact perdu depuis des siècles, censé accorder une sagesse divine à son porteur.</br> La découverte de ce trésor pourrait changer le destin de Valombre et révéler les vraies intentions de votre maître disparu.",
        "\image/1478721861_185227_1200x630x1.f.jpg",
        [
            { text: "Recommencer votre aventure ! ", next: 0 }
        ]
    ),
    //sequence 13
    new Sequence(
        " Le Sort Puissant",
        "En choisissant de lire le grimoire, vous tombez sur une page qui brille d'une lumière étrange. Votre curiosité piquée, vous commencez à déchiffrer les runes anciennes.</br> Elles révèlent un sort oublié, le 'Chant de l'Aether', connu pour sa capacité à manipuler la réalité même.</br></br>En prononçant les paroles, vous ressentez une puissance immense vous traverser.</br> Ce sort vous permet de tisser et de remodeler les fils de la magie, vous donnant un contrôle sans précédent sur les éléments et le temps. Avec cette connaissance, vous devenez l'un des magiciens les plus puissants de Valombre, capable de façonner l'avenir du royaume.</br></br> Cette découverte marque non seulement la fin de votre quête, mais aussi le début d'une nouvelle ère pour vous en tant que magicien. Vous avez maintenant le pouvoir de protéger Valombre contre des menaces inconnues, ou de choisir un chemin plus ambitieux, remodelant le monde selon votre vision.",
        "\image/illustration-magicien-feu-fort-puissant-lance-sort-magique-feu-idee-pour-papier-peint-fantastique_955012-5125.jpg",
        [
            { text: "Recommencer votre aventure ! ", next: 0 }
        ]
    ),
    /************************************************ Sequence aditionnelle enigme  *********************/
    //sequence 14
    new Sequence(
        "L'enigme",
        "Je suis pris avant de naître, et encore après ma mort. Je ne suis jamais vivant, mais j'ai grandi avec le temps. Je peux disparaître en un instant, mais je suis toujours là, dans votre esprit. Que suis-je?",
        "\image/images.png",
        [
            { text: "Une ombre.", next: 15 },
            { text: "Un souvenir. ", next: 16 },
            { text: "Un rêve.", next: 15 }
        ]
    ),
    //sequence 15 
    new Sequence(
        "La mort",
        "Perdu... Vous êtes mort, broyé par des troncs d'arbres. ",
        "\image/images.png",
        [
        
            { text: "Revenir au début en tant qu'une ombre.", next: 0 },
            { text: "Recommencer, gardant seulement un souvenir de cette fin.", next: 0 },
            { text: "Essayer à nouveau, considérant cela comme un mauvais rêve.", next: 0 }
            
        ]
    ),
    // sequence 16 
    new Sequence(
        "La Clé des Souvenirs",
        "Votre choix résonne dans l'air, et soudain, le monde autour de vous semble changer. 'Un souvenir', murmurez-vous.</br> À cet instant, une série de visions vous submerge, révélant les secrets longtemps cachés de Velzar.</br></br> Vous voyez Velzar, votre maître, dans ses jeunes années, découvrant un artefact ancien, la 'Clé des Âges'.</br></br> Cet artefact avait le pouvoir de manipuler la mémoire et le temps. Velzar l'avait caché, craignant ses effets dévastateurs s'il tombait entre de mauvaises mains.</br></br>Vous comprenez maintenant que votre quête n'était pas seulement de retrouver Elzar, mais aussi de comprendre son héritage et de protéger ce secret.</br> Les souvenirs d'Elzar, emprisonnés dans l'artefact, avaient guidé vos pas jusqu'ici, vous préparant à prendre la relève et à garder le secret de la 'Clé des Âges'.</br></br>Alors que cette révélation vous envahit, vous sentez une responsabilité peser sur vos épaules.</br></br> Le destin de Valombre et peut-être du monde entier repose désormais entre vos mains.",
        "\image/H830fedef758c467eb110eb57e1e6b04f6.jpg_640x640Q90.jpg_.webp",
        [
            { text: "Recommencer votre aventure ! ", next: 0 }
        ]
    )
    
];
// function de transition de séquence 
function changeSection(index) {
    if (index < sections.length) {
        sections[index].display();
    } else {
        console.log("Fin du jeu ou section non définie");
    }
}

// début d'aventure en cliquant sur Commencer 
const begin = document.getElementById("button"); 
const intro = document.getElementById("intro"); 
begin.addEventListener("click", () => {
    sections[0].display();
    begin.style.display= 'none';
    intro.style.display= 'none';
});

// Assurez que le DOM est complètement chargé
/*document.addEventListener("DOMContentLoaded", () => {
    sections[0].display();
}); */
