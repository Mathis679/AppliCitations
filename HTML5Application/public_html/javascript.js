
function Citation(citation, auteur) {
  this.citation = citation;
  this.auteur = auteur;
}


var tab = new Array();
tab[1] = new Citation("Je ne veux pas utiliser le mot ‘niquer’, mais j’ai bien niqué Kadhafi","Trump");
tab[2] = new Citation("Mon compte Twitter est devenu tellement puissant que je peux forcer mes ennemis à dire la vérité","Trump");
tab[3] = new Citation("Je serai le meilleur président du travail que Dieu ait jamais créé","Trump");
tab[4] = new Citation("Une partie de ma beauté, c’est que je suis riche","Trump");
tab[5] = new Citation("Le réchauffement climatique a été inventé par et pour les Chinois, afin de rendre l'industrie américaine moins compétitive","Trump");
tab[6] = new Citation("Les hommes et les poissons peuvent coexister pacifiquement.", "Bush");
tab[7] = new Citation("Sans doute serais-je chrétien, si les chrétiens l'étaient vingt-quatre heures par jour.", "Gandhi");
tab[8] = new Citation("Ma vie est mon seul enseignement.", "Gandhi");
tab[9] = new Citation("Le sexe, la violence et le terrorisme devraient être interdits.", "Poutine");
tab[10] = new Citation("Le Mexique envoie “de la drogue et des violeurs” aux Etats-Unis","Trump");

var i = Math.floor((Math.random() * 10) + 1); 

document.getElementById("citation").innerHTML=tab[i].citation;
