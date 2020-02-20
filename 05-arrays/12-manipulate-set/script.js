/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    const fruits = new Set([
      "pomme",
      "poire",
      "fraise",
      "tomate",
      "orange",
      "mandarine",
      "durian",
      "pêche",
      "raisin",
      "cerise"
    ]);

    fruits.delete("pomme");
    fruits.delete("cerise");
    fruits.add("banane");
    fruits.add("kiwi");
    //   const simplefruits = new set(fruits);
    console.log(Array.from(fruits));
  });
})();
