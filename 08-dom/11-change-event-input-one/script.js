/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let monInput = document.getElementById("pass-one"); // Nous prenons l'input pour le mettre dans la variable monLabel
  let nbr_letter = document.getElementById("counter"); // Nous prennons le span pour le compteur de lettres

  monInput.addEventListener("input", () => {
    // Permet de faire appel à la fonction refresh à chaque input de l'utilisateur.
    refresh();
  });

  function refresh() {
    let valeur = monInput.value; // Nous stockons la valeur de l'input dans la variable valeur.
    let numberletter = valeur.split(""); // On crée un tableau pour chaque lettre de valeur que nous mettons dans numberletter
    nbr_letter.innerHTML = numberletter.length + "/10"; // Nous affichons la taille du tableau  /10

    if (numberletter.length >= 10) {
      numberletter = valeur.split(""); // Nous allons remettre les 10 premiers caractères du tableau!
      nbr_letter.innerHTML = "10/10"; // Nous mettons le nombre de lettres 10/10
      monInput.value = ""; // Nous vidons l'input
      for (let i = 0; i < 10; i++) {
        monInput.value = monInput.value + numberletter[i]; // Nous remplissons l'input par les 10 premières saisies!
      }
    }
  }
})();
