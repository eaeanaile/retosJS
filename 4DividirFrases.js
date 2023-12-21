/* En este reto se plantea una función que recibe una frase y un valor numérico. La frase debe romperse en segmentos de longitud lo más próxima al valor numérico, pero no deben usarse guiones, cada segmento debe contner solo palabras completas. No se pueden partir las palabras. Se supone que ninguna palabra es mayor que el ancho máximo

"Hoy es un día de suerte para todos"
Partir en trozos de 7 caracteres
'Hoy es', 'un día', 'de', 'suerte', 'para', 'todos' */


/* declaramos la funcion con dos parametro que estara una cadena de text que se va dividir y lon maxima para la frase */
function dividirFrase(frase, valorNumerico) {
    /*  usamos split(' '), para dividir la cadena usando el espacio en blanco como separador */
    let palabras = frase.split(' ');
    let resultado = [];
    let indice = 0;
  
    /* en while ejecutamos mientras el índice sea menor que la longitud del arreglo de palabras  */
    while (indice < palabras.length) {
      let segmento = '';
      while (indice < palabras.length && segmento.length + palabras[indice].length <= valorNumerico) {
        segmento += (segmento === '' ? '' : ' ') + palabras[indice];
        indice++;
      }
      resultado.push(segmento);
    }
  
    return resultado;
}
  
let frase = "Hoy es un día de suerte para todos";
let valorNumerico = 7;

let resultado = dividirFrase(frase, valorNumerico);
console.log(resultado);