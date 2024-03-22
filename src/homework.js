(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */
  let multipliedNumbers = numbers.map(number => number * 5);
  console.log(multipliedNumbers);
  /*Resultado esperado: [5, 10, 15, 20, 25] */
  

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */
  let sortedNames = names.sort();
  console.log("Second exercise:", sortedNames); 

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  let uniqueData = [...new Set(data)];
  console.log("Third exercise:", uniqueData); 
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Fourth excercise */
  const largeWord = "abcdabcdABCD";
  /* Dado un string mostrar cuantas veces se repite cada letra*/
  const countLetters = str => {
    return [...str].reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
  };
  console.log("Fourth exercise:", countLetters(largeWord));
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */
})();
