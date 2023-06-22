//! Function - Argumentos/Parâmetros

/*
    FUNCTION / FUNÇÕES:

        Trecho de código que é executado SOMENTE quando solicitado
        Podem ser chamadas quantas vezes quiser

*/



const variavel = 'Abacate'
console.log(variavel)

// função sem parametros
function nomeNaTela() {
    console.log('Vagner')
}
nomeNaTela() // chamando a função


// função com 1 parametro
function meuNome(name){
    console.log(`O nome é: ${name}`)
}
meuNome('joao')
meuNome('Mateus')
meuNome('jose')
meuNome('paulinho')


// função com 2 parametros
function sum(value1, value2) {
    console.log(value1 + value2)
}

sum(50, 50)

function person(name, age, sex){
    console.log(`Meu nome é ${name}, tenho ${age} anos e meu genero é ${sex}`)
}

person('Vagner', 27, 'Masculino')


// exercicio


function calc( value1, value2){

    console.log(value1 + value2)
    console.log(value1 - value2)
    console.log(value1 * value2)
    console.log(value1 / value2)
}

calc(10, 10)