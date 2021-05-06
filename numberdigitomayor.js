const readline = require('readline');
let Captura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
Captura.question(' escriba un numero', function(respuesta){
    let numero =  Number(respuesta.toString())
    function extraerDigitoMayor(numero) {
        if(typeof numero === 'number' && Number.isInteger(numero)) {
            let digitos = String(numero).split('').map(c => parseInt(c));   
            let digitoMayor = digitos[0];   
            digitos.forEach(d => digitoMayor = Math.max(digitoMayor, d));
    
            return digitoMayor;
        } else {
            throw TypeError('El argumento debe ser entero');
        }
    }
    
    try {
        console.log(extraerDigitoMayor(numero)+" es el mayor");    
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
    Captura.close();
});

