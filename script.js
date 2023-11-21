function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par");
    } else {
        console.log("El número " + numero + " es impar");
    }
}

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        console.log("El número " + numero1 + " es mayor que el número " + numero2);
    } else if (numero2 > numero1) {
        console.log("El número " + numero2 + " es mayor que el número " + numero1);
    } else {
        console.log("Ambos números son iguales: " + numero1 + " y " + numero2);
    }
}


function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log("¡Sí! El número " + numero + " es múltiplo de 5");
    } else {
        console.log("No, el número " + numero + " no es múltiplo de 5");
    }
}


function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}


function imprimirPalabraVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}


function imprimirValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}