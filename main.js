producto = prompt("Introduzca el nombre del articulo:");
precio = Number(prompt("Introduzca el precio del articulo:"));
cantidad = Number(prompt("Introduzca la cantidad de productos que lleva:"));

x = (precio * cantidad);

alert(`Articulo / Precio / Cantidad / Total \n${producto} / ${precio} / ${cantidad} / ${x}`)