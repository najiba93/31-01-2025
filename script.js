//variables qui contiennent des élements du DOM ici des class
//document. Permet de selectionner un element HTML en utilisant un selecteur CSS
 
// document.querySelector() est une méthode JavaScript qui permet de sélectionner le premier élément du DOM correspondant au sélecteur CSS passé en paramètre.
// Il renvoie un élément HTML ou null si aucun élément correspondant n'est trouvé.
 
// Le . avant le nom de classe indique qu'on cible une classe CSS, comme en CSS :
const xClose=document.querySelector('.xClose')
const navburgeur=document.querySelector('.burgeur')
const nav=document.querySelector('.nav')

const imgPrincipal=document.querySelector('.image-product-principal')
const close=document.querySelector('.close')
const modal=document.querySelector('.modal')
 
 
// imgPrincipal.addEventListener('click', function() { ... })
 
// addEventListener() permet d'attacher un écouteur d'événement à imgPrincipal (l'image du produit).
// 'click' signifie que l'événement se déclenche lorsqu'on clique sur l'image.
// La fonction anonyme function() { ... } s'exécute lorsqu'on clique sur imgPrincipal.
//  modal.classList.add("active")
 
// modal est  une variable qui stocke l'élément HTML de la modale.
// classList.add("active") ajoute la classe "active" à l’élément .modal, ce qui peut modifier son apparence via CSS.
 
//  Objectif : Quand on clique sur l'image, la modale apparaît.
 
navburgeur.addEventListener('click',function(){
 
    nav.classList .toggle("active")
})
imgPrincipal.addEventListener('click',function(){
 
    modal.classList.add("active")
})
 
// close.addEventListener('click', function() {...});
// close : Variable qui stocke l’élément HTML représentant le bouton de fermeture (ex. <span class="close">X</span>).
// .addEventListener('click', function() {...}) :
// Ajoute un événement "click" à close
// Exécute la fonction à l'intérieur du {} lorsque l'élément est cliqué
//  modal.classList.remove('active');
// modal : Variable qui stocke l’élément HTML représentant la modale (ex. <div class="modal">...</div>).
// .classList.remove('active') :
// Supprime la classe "active" de l'élément modal
// Effet attendu : La modale disparaît, car "active" était la classe qui la rendait visible.
 
navclic.addEventListener('click',function(){
    modal.classList.remove('active')
})
close.addEventListener('click',function(){
    modal.classList.remove('active')
})


function closeElement(variable1,variable2,className){
    variable1.addEventListener('click',function(){
        variable2.classList.remove(className)
    }
}
closeElement(xClose,nav,'active')

closeElement(close,)