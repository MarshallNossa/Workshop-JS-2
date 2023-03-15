let nombre = [];
let nota = [];
let mujeres = [];
let hombres = [];

estudiantes = Number(prompt("Cuantos estudiantes desea ingresar?: "));

for (let i = 1; i < estudiantes + 1; i++) {
    nombre.unshift(prompt(`Introduzca el nombre del estudiante #${i}:`));
    nota.unshift(Number(prompt(`Digite la nota definitiva del estudiante #${i}`)));
    sexo = Number(prompt(`El estudiante #${i} es: \n 1.Masculino \n 2.Femenino`));
    if (sexo == 1) {
        hombres.unshift(1);
    }
    else if (sexo == 2) {
        mujeres.unshift(1);
    }
    else {
        alert("Introduzca un valor valido");
    }
}

x = nota.indexOf(Math.max(...nota));
y = nota.indexOf(Math.min(...nota));

alert(`El estudiante ${nombre[x]} sacó la mejor nota que es de ${nota[x]}, y el estudiante ${nombre[y]} sacó la nota mas baja que es de ${nota[y]}.`)

alert(`Se introdujeron ${(mujeres.length)} mujeres y ${(hombres.length)} hombres.`)