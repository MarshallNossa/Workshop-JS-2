let num = Number(prompt("Introduzca su numero: "))

function par() {
    return (num % 2) == 0
}

if (par(num)){
    if (num >= 10){
        alert("Su numero es par y mayor a 10")
    }
    if (num < 10){
        alert("Su numero es par y menor a 10")
    }
}
else {
    alert("Su numero es impar")
}