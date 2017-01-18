var Produit = function(nom, prix){
	this.nom = nom;
	this.prix = prix;
};

var Vienoiserie = function(frais){
	
};
var Panier = function(){
	this.totalHT = 0;
	this.ajoute = function(objet, nbr){
		if(nbr ===undefined){
			this.totalHT = this.totalHT + objet.prix;
		}else{
			this.totalHT = this.totalHT + (objet.prix*nbr);
		}
		this.totalHT = Math.floor(this.totalHT*100)/100;
		this.totalTTC = Math.ceil((this.totalHT * 1.20)*100)/100;
	};
	this.retire = function(objet, nbr){
		if(nbr === undefined){
			this.totalHT = this.totalHT - objet.prix;
		}else{
			this.totalHT = this.totalHT - (objet.prix*nbr);
		}
		this.totalHT = Math.floor(this.totalHT*100)/100;
		this.totalTTC = Math.floor((this.totalHT * 1.20)*100)/100;
	};
};
//console.log(typeof baguette == 'object');
var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);
var chocolatine = new Produit('')
//console.log(typeof baguette == 'object');


var panier = new Panier();
//console.log(baguette.prix)
panier.ajoute(baguette);
panier.ajoute(croissant, 2);

console.log(panier.totalHT);
console.log(panier.totalTTC);