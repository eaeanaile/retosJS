/* La función que debes escribir lleva como argumento un objeto de la forma {key1: valor1, key2: valor3...} y deberá devolcer un array bidimensional, donde cada elemento será uno de los pares clave valor del objeto

Por ejemplo:

let objeto = {pan:23, vino: 10, aceite: 12}

let precios = toArray(objeto)

precios contendrá
[['pan',23], ['vino', 10], ['aceite', 12]] */


function toArray(objeto){
    let resultado = [];
 
    for(clave in objeto){
       resultado.push([clave, objeto[clave]])
 
    }
    return resultado; 
}

let objeto = {pan: 23, vino: 10, aceite: 12};
let precios = toArray(objeto);
console.log(precios);