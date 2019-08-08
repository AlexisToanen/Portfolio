window.addEventListener("scroll", ScrollNav);

function ScrollNav(){
  var topnav = document.querySelector('.nav');
  var scrollnav = window.pageYOffset;

  if(scrollnav > 80) {
  	topnav.style.backgroundColor = "rgba(14,25,36,10)";
    topnav.style.height = "65px";
  }
  else {
  	topnav.style.backgroundColor = "rgba(0,0,0,0)";
    topnav.style.height = "60px";
  }
}

/*
var n = 100; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 4; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur

function countdown() {
  node.innerHTML = ++cpt;
if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
  setTimeout(countdown, delta);
}
}

setTimeout(countdown, delta);

<p id="compteur">0</p>
*/
