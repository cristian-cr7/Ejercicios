const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question(' escriba numero:  ', function(respuesta){
     let numero = Number(respuesta.toString().split('').reverse().join(''))
   console.log(`invertido es: ${numero}`);
    interfazCaptura.close();
});