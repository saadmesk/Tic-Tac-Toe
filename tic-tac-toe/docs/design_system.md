* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
}
// Cette règle s'applique à tous les éléments de la page HTML. Elle définit la boîte de modèle de tous les éléments, en fixant leur padding et leur margin à 0 et
en utilisant la police de caractères "Raleway" pour tout le texte.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
body {
    height: 100vh;
    background: linear-gradient(135deg, #d7c3a3, #071643);
}
// Cette règle s'applique au corps de la page HTML. Elle définit la hauteur du corps à 100% de la hauteur de l'affichage et définie un fond en dégradé linéaire
avec un angle de 135 degrés allant d'un beige (#d7c3a3) à un bleu foncé (#071643).
---------------------------------------------------------------------------------------------------------------------------------------------------------------
html {
    font-size: 16px;
}
// Cette règle s'applique à l'élément HTML de la page. Elle définit la taille de police de base à 16 pixels pour tous les éléments enfants.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
.wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
// Cette règle s'applique à la classe "wrapper". Elle définit la position de cet élément à être absolue, centrée horizontalement et verticalement à 50% de la
largeur et de la hauteur de l'écran.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
.container {
    width: 70vmin;
    height: 70vmin;
    display: flex;
    flex-wrap: wrap;
    gap: 2vmin;
}
// Cette règle s'applique à la classe "container". Elle définit la largeur et la hauteur de cet élément à 70% de la largeur et de la hauteur de l'affichage.
Elle utilise un conteneur flexible (display: flex) avec une disposition de wrap pour permettre aux éléments enfants de passer à la ligne si nécessaire.
Ils ont un espace de 2% de la hauteur et de la largeur de l'affichage (gap: 2vmin) entre eux.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
.button-option {
    background: #ffffff;
    height: 22vmin;
    width: 22vmin;
    border: none;
    border-radius: 8px;
    font-size: 10vmin;
    color: #1d4b0b;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
//Cette règle s'applique à la classe "button-option" qui définit les boutons de jeu. Elle définit la couleur de fond à blanc, la hauteur et la largeur à 22% de la
hauteur et de la largeur de l'affichage, respectivement. Elle définit la bordure à 0 (border: none) et le rayon de la bordure à 8 pixels (border-radius: 8px).
La taille de police est de 10% de la hauteur et de la largeur.