/* Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres (letras y números) dentro de una cadena de texto. El resultado se devuelve una matriz de objetos. Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces). La matriz estará ordenada por el campo carácter. No se diferencia entre mayúsculas y minúsculas ni entre vocales acentuadas.

Ejemplo:

contarCar("Hoy ya es día 10")

deberá devolver:

{car: '0', veces: 1}
{car: '1', veces: 1}
{car: 'a', veces: 2}
{car: 'd', veces: 1}
{car: 'e', veces: 1}
{car: 'h', veces: 1}
{car: 'i', veces: 1}
{car: 'o', veces: 1}
{car: 's', veces: 1}
{car: 'y', veces: 2} */


function contarCar(cadena) {
    cadena = cadena.toLowerCase(); 
    let resultado = [];
  
    let i = 0;
    while (i < cadena.length) {
      let char = cadena.charAt(i);
      if (/[a-z0-9]/.test(char)) {
        let existe = false;
        let j = 0;
        while (j < resultado.length) {
          if (resultado[j].car === char) {
            resultado[j].veces++;
            existe = true;
            break;
          }
          j++;
        }
        if (!existe) {
          resultado.push({ car: char, veces: 1 });
        }
      }
      i++;
    }
  
    resultado.sort((a, b) => {
      if (a.car < b.car) {
        return -1;
      }
      if (a.car > b.car) {
        return 1;
      }
      return 0;
    });
  
    return resultado;
}

console.log(contarCar("Hoy ya es día 10"));