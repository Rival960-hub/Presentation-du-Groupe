// Sélectionne tous les boutons "En savoir plus" dans la page
document.querySelectorAll('.info-btn').forEach(btn => {

  // Pour chaque bouton, on ajoute un écouteur d'événement "click"
  btn.addEventListener('click', function() {

    // "this" fait référence au bouton cliqué
    // nextElementSibling récupère l'élément juste après le bouton dans le HTML (ici .extra-info)
    // extra = nom à la variable
    // const = peux pas réassigner la variable
    const extra = this.nextElementSibling;

    // Vérifie si le div .extra-info est caché ou vide
    if(extra.style.display == 'none' || extra.style.display == '') {
      // Si oui, on l'affiche
      extra.style.display = 'block';
    } else {
      // Sinon, on le cache
      extra.style.display = 'none';
    }
  });
});
