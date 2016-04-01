
document.getElementById("image").style.visibility="hidden";




var i = Math.floor((Math.random() * tab.length) + 1)-1; 


document.getElementById("citation").innerHTML=tab[i].citation;

var perso =tab[i].auteur;


for(var ind=0;ind<tabauteur.length; ind++){
	if(tabauteur[ind].auteur == tab[i].auteur){
		tabauteur[ind].pris = "oui";
	}
	
}


function verif(){
	if(document.getElementById("rep").value.toLowerCase() === perso.toLowerCase()){
		for(var i=0;i<tabauteur.length;i++){
			if(perso == tabauteur[i].auteur){
				document.getElementById("SRC").src = tabauteur[i].imgbien;
				document.getElementById("image").style.visibility="visible";
				break;
			}
		}
	}else{
		for(var i=0;i<tabauteur.length;i++){
			if(perso == tabauteur[i].auteur){
				document.getElementById("SRC").src = tabauteur[i].imgvnr;
				document.getElementById("image").style.visibility="visible";
				break;
			}
		}
	
			
	}
	
	document.getElementById("SRC").style.width = "30%";
	document.getElementById("SRC").style.height = "50%";
	document.getElementById("SRC").style.marginRight = "auto";
	document.getElementById("SRC").style.marginLeft = "auto";
	document.getElementById("SRC").style.display="block";
	document.getElementById("principal").style.visibility="hidden";
	
	
}

