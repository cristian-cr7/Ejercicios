const { type } = require('os');
const readline = require('readline');
var y = 0;
let Captura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
Captura.question(' escriba numero:  ', function(respuesta){
    let numero = respuesta;
    Captura.question(' escriba digito:  ', function(digito){
        let numero = digito;  
        console.log(`el digito es : "${digito}" ${respuesta.includes(digito)? 'esta' : 'no esta'} contenido en el número`);
    Captura.close();
});
});


