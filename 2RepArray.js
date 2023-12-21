/* Items repetidos en un array
Un reto para manejar arrays. Se trata de una función que a partir de una lista de números enteros devuelve otra lista con los números que están repetidos en la lista original. */

function repetidos(array) {
    let contador = {}; /* {} se usa para crear objetos */
    let repetidos = []; /* {} se usa para crear arrays */
    let i = 0;
    let number;
  
    /*while se usa para poder encontrar el array */
    while (i < array.length) {
      let num = array[i];
      if (contador[number] === undefined) {
        contador[number] = 1;
      } else {
        contador[number]++;
        if (contador[number] === 2) {
          repetidos.push(number);
        }
      }
      i++;
    }
  
    return repetidos;
}