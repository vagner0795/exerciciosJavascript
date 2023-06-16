//! Operadores de comparação

/* 
 = -> Atribuir valor
 == -> Igual // compara o valor mas não o tipo
 === -> Totalmente igual // compara valor e tipo

 != -> Diferente // compara o valor mas não o tipo
 !== -> Totalmente diferente // compara o valor e o tipo

 */

const number1 = 35
const number2 = "30"



if( number1 == number2){
    console.log('São iguais')
} else {
    console.log('Não sao iguais')
}

console.log( number1 === number2)

if(number1 != number2){
    console.log('São diferentes')
} else {
    console.log('Não são diferentes ')
}

console.log( number1 !== number2)