//! SetTimeout & setInterval

/* 

setTimeout -> Executa uma vez
setInterval -> Executa infinitas vezes
clearInterval -> vai pausar o setInterval

tempo é definido em mílisegundos

1000 mílisegundos = 1 segundo

*/

// existe 3 formas de usar essas funções :


//! arrow function
setTimeout(() => {

}, timeout);

//! function dentro dos parametros
setTimeout(function () {

}, timeout);


//! function fora dos parametros
function myFunction() {

}

setTimeout(myFunction, timeout)




setTimeout(() => {
    alert('Executei')
}, 1000)

