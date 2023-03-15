const a  = [];

 x = true;

while (x !== 0) {
    a.unshift(Number(prompt("Digite su numero:")));
    x = Number(prompt("Si no desea ingresar mas numeros digite 0"));
}

let sum = Object.values(a).reduce((total, val) => total + val);
let mayor = a.indexOf(Math.max(...a));
let menor = a.indexOf(Math.min(...a));
let promedio = (sum / (a.length));

alert(`La sumatoria de los datos registrados es de ${sum}, su promedio es ${promedio}, el numero mayor fue ${a[mayor]} y el numero menor fue ${a[menor]}`)