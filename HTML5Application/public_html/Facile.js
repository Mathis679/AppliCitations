

document.getElementById("image").style.visibility="hidden";



var i = Math.floor((Math.random() * tab.length) + 1)-1; 

var butalea =Math.floor((Math.random() * 2) +1 )- 1; 
console.log(butalea);

document.getElementById("citation").innerHTML=tab[i].citation;
document.getElementById("perso"+butalea).innerHTML=tab[i].auteur;
document.getElementById("perso"+butalea).className="juste";





for(var ind=0;ind<tabauteur.length; ind++){
	if(tabauteur[ind].auteur == tab[i].auteur){
		tabauteur[ind].pris = "oui";
	}
	
}



for(var j=0 ; j<2;j++){
	if(document.getElementById("perso"+j).className == "juste"){
		
	}else{
		var autalea = Math.floor((Math.random() * tabauteur.length)+1 )-1;
		console.log(autalea);
		while(tabauteur[autalea].pris=="oui" ){
			autalea = Math.floor((Math.random() * tabauteur.length)+1 )-1;
			
		}
		
		tabauteur[autalea].pris= "oui";
		document.getElementById("perso"+j).innerHTML = tabauteur[autalea].auteur;
		
	}
	
}

function verif(perso){
	if(document.getElementById(perso).className == "juste"){
		document.getElementById("audioY").play();
		for(var i=0;i<tabauteur.length;i++){
			if(document.getElementById(perso).innerHTML == tabauteur[i].auteur){
				document.getElementById("SRC").src = tabauteur[i].imgbien;
				document.getElementById("image").style.visibility="visible";
				break;
			}
		}
	}else{
		document.getElementById("audioN").play();
		for(var j=0 ; j<2;j++){
			if(document.getElementById("perso"+j).className == "juste"){
		
				for(var i=0;i<tabauteur.length;i++){
					if(document.getElementById("perso"+j).innerHTML == tabauteur[i].auteur){
						document.getElementById("SRC").src = tabauteur[i].imgvnr;
						document.getElementById("image").style.visibility="visible";
						break;
					}
				}
	
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
