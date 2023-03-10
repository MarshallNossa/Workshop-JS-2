alert("Introduzca los siguientes valores para saber el voltaje de la corriente.");

resistencia = Number(prompt("Cuantos ohmios posee su resistencia?"));
corriente = Number(prompt("Cuantos amperios tiene de corriente?"));

voltaje = (resistencia * corriente);

alert(`El voltaje de su circuito es de ${voltaje} V`);