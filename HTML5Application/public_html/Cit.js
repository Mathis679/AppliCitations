function Citation(citation, auteur) {
  this.citation = citation;
  this.auteur = auteur;
}

function Auteurpris(auteur, pris, imgbien, imgvnr) {
  this.auteur = auteur;
  this.pris = pris;
  this.imgbien = imgbien;
  this.imgvnr = imgvnr;
}


var tab = new Array();
tab[0] = new Citation("Les jours où nos ennemis pouvaient nous faire du chantage avec des bombes nucléaires sont révolus à jamais.", "Kim Jong");
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
tab[11] = new Citation("Je vais te faire courir moi tu vas voir, rouquin...PD!", "Lepen");
tab[12] = new Citation("La Déclaration des droits de l'Homme marque le début de la décadence de la France", "Lepen");
tab[13] = new Citation("Un homme qui ne boit pas de vin n'est pas tout à fait respectable, selon moi.", "Lepen");
tab[14] = new Citation("L'homosexualité n'est pas un délit, mais elle constitue une anomalie biologique et sociale.", "Lepen");
tab[15] = new Citation(" Une noisette, j'la casse entre mes fesses tu vois... ", "VanDamme");
tab[16] = new Citation(" Une femme qui est enceinte, par exemple, elle est aware qu'elle attend un enfant ... ", "VanDamme");
tab[17] = new Citation("Mes autres prénoms sont Camille et François. J'aime bien Camille, non ? Ca fait \"old fashion\", tu trouves pas ? Ca respire le meuble de provence !", "VanDamme");
tab[18] = new Citation(" Le monde est composé de flèches et de molécules, et d'électricité,comme le Big-Bang tu vois, et tout ça ensemble, ça forme l'Univers. ", "VanDamme");
tab[19] = new Citation("Je n'ai jamais vu quelqu'un de mince boire du Coca Light", "Trump");
tab[20] = new Citation("On juge Berlusconi parce qu'il vit avec des femmes. S'il était homosexuel, personne ne s'en prendrait à lui", "Poutine");
tab[21] = new Citation("Bien sûr, je suis un pur et absolu démocrate. Depuis la mort du mahatma Gandhi, je n'ai plus personne à qui parler.", "Poutine");
tab[22] = new Citation("La première usine qu’il faut faire en France, c’est une usine à couilles !", "Lepen");
tab[23] = new Citation("Mon personnel de maison est noir, mon cuisinier est noir... Que faut-il que je fasse ? Que je me marie avec un noir, homosexuel et sidaïque ?", "Lepen");
tab[24] = new Citation("Hiroshima est un détail de l'histoire aérienne de la guerre", "Lepen");
tab[25] = new Citation("De plus en plus, nos importations viennent de l'étranger.", "Bush");
tab[26] = new Citation("Notre nation doit s'unifier pour se réunir", "Bush");
tab[27] = new Citation("La troisième priorité est de donner la première des priorités à l'enseignement", "Bush");
tab[28] = new Citation("La véritable éducation consiste à tirer le meilleur de soi-même. Quel meilleur livre peut-il exister que le livre de l'humanité ?", "Gandhi");



var tabauteur = new Array();

tabauteur[0]=new Auteurpris("Kim Jong","non","Image\\kim_good.jpg","Image\\kim_vnr.jpg");
tabauteur[1]=new Auteurpris("Trump","non","Image\\Trump_good.jpg","Image\\trump_vnr.png");
tabauteur[2]=new Auteurpris("Bush","non","Image\\bush_good.jpg","Image\\bush_vnr.jpg");
tabauteur[3]=new Auteurpris("Gandhi","non","Image\\Gandhi_good.jpg","Image\\gandhi_vnr.jpg");
tabauteur[4]=new Auteurpris("Poutine","non","Image\\poutine_good.jpg","Image\\Poutine_vnr.jpg");
tabauteur[5]=new Auteurpris("Lepen","non","Image\\jmlp_content.jpg","Image\\jmlp_vnr.jpg");
tabauteur[6]=new Auteurpris("VanDamme","non","Image\\vandamme_juste.jpeg","Image\\vandamme_vnr.jpg");

