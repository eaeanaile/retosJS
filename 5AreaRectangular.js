/* Se trata de un ejercicio muy habitual en los ejemplos de javascript: crear una función que calcule el area de un rectángulo. En este caso tendrás que diseñar esa función. Los argumentos son las coordenadas cartesianas (x, y) de las cuatro esquinas del rectángulo y pueden enviarse en cualquier orden, no necesariamente como puntos contiguos. */


function distanciaRectangulo(ini, fin){
  let difx = ini.x - fin.x;
  let dify = ini.y - fin.y;
  let distanciaRectangulo = Math.sqrt(difx * difx + dify * dify);
  return distanciaRectangulo;
}
  
function rectangulo(p0, p1, p2, p3) {
  let distancia1 = [];
  let i = 0;
  
  while (i < 3) {
    let distancia2;
    if (i === 0) {
      distancia2 = distanciaRectangulo(p0, p1);
    } else if (i === 1) {
      distancia2 = distanciaRectangulo(p0, p2);
    } else {
      distancia2 = distanciaRectangulo(p0, p3);
    }
    distancia1.push(distancia2);
    i++;
  }
  
  let max = Math.max(distancia1);
  let ind = distancia1.indexOf(max);
  distancia1.splice(ind, 1);

  let area = distancia1[0] * distancia1[1];
  return area;
}
  
let p0 = { x: 25, y: 40 };
let p1 = { x: 10, y: 20 };
let p2 = { x: 25, y: 20 };
let p3 = { x: 10, y: 40 };

let area = rectangulo(p0, p1, p2, p3);
console.log(area);