// Función para calcular el índice de masa corporal (IMC)
function calcularIMC(altura, peso) {
    if (altura <= 0 || peso <= 0) {
        return "Altura y peso deben ser valores positivos.";
    } else {
        const imc = peso / (altura ** 2);
        return imc;
    }
}

// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Función para convertir dólares a reales
function convertirAReales(dolares) {
    const cotizacionDolar = 4.80;
    if (dolares < 0) {
        return "El valor en dólares debe ser positivo.";
    } else {
        const reales = dolares * cotizacionDolar;
        return reales;
    }
}

// Función para calcular área y perímetro de una sala rectangular
function calcularRectangular(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}

// Función para calcular área y perímetro de una sala circular
function calcularCircular(radio) {
    const pi = 3.14;
    const area = pi * (radio ** 2);
    const perimetro = 2 * pi * radio;
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}

// Función para mostrar la tabla de multiplicar
function tablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

// Ejemplos de uso
const altura = 1.75;
const peso = 68;
const imc = calcularIMC(altura, peso);
console.log("IMC:", imc);

const numeroFactorial = 5;
const factorial = calcularFactorial(numeroFactorial);
console.log(`Factorial de ${numeroFactorial}: ${factorial}`);

const dolares = 100;
const reales = convertirAReales(dolares);
console.log(`${dolares} dólares son aproximadamente ${reales} reales.`);

const alturaRectangular = 5;
const anchuraRectangular = 8;
calcularRectangular(alturaRectangular, anchuraRectangular);

const radioCircular = 3;
calcularCircular(radioCircular);

const numeroTabla = 7;
tablaMultiplicar(numeroTabla);
