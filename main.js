let nombres = []
let edades = []

for (let i = 0; i < 3; i++) {
    nombres.unshift(prompt(`Introduzca el nombre # ${i}`))
    edades.unshift(Number(prompt(`Introduzca la edad # ${i}`)))
}

x = edades.indexOf(Math.max(...edades))
alert(`La persona com mayor edad es ${nombres[x]}, y su edad es ${edades[x]}`)