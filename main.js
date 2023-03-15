let atletas = [];
let saltos = [];

a = Number(prompt("Cuantos atletas desea ingresar?:"))

for (let i = 0; i < a; i++) {
        atletas.unshift(prompt(`Ingrese el nombre del atleta ${i}:`));
        saltos.unshift(Number(prompt(`Digite la distacia del salto en metros del atleta ${i}:`)));
}

x = saltos.indexOf(Math.max(...saltos));

alert(`El atleta ${atletas[x]} ha obtenido la medalla de oro con un salto de ${saltos[x]} metros`)

if (saltos[x]>15.50) {
    alert(`Felicitaciones ${atletas[x]}, haz roto el record con un salto de ${saltos[x]} metros, obtuviste una recompensa de 500 millones de pesos!!!`)
}