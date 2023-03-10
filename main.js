alert ("A continuacion deberá introducir las 3 notas (de 0 a 5) que ha obtenido en el periodo para poder saber su promedio y si será becado")

a = true

while (a = true) {
    let nota1 = parseFloat(prompt("Ingrese su primera nota: "));
    let nota2 = parseFloat(prompt("Ingrese su segunda nota: "));
    let nota3 = parseFloat(prompt("Ingrese su tercera nota: "));

    let resultado = ((nota1 + nota2 + nota3) / 3)

    if (resultado <=0, resultado <=3.9){
        alert(`Su promedio es de ${resultado}, estudie vago.`);
        a = false
    }
    else if (resultado >3.9, resultado <=5){
        alert(`Su promedio es de ${resultado}, felicitaciones, ha sido becado.`)
        a = false
    }
    else {
        alert("Introduzca valores validos")
    }
}