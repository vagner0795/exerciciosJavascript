//! ARROW FUNCTIONS | Funções flecha

/*

    Função padrão -> function name(){
        ?codigo aqui
    }

    Arrow function -> name = () => {
        ?codigo aqui
    }

    Não escrevemos function. além disso, usamos o sinal " => " para criá-la
    o que lembra uma flecha, fazendo jus ao nome " Arrow Functions"

*/


//ex: function normal
function sumNumber(value1, value2) {
    console.log(value1 + value2)
}
sumNumber(10,10)

// ex: arrow function com reurn
somarNumeros = (value1, value2) => {
    return (value1 + value2)
}
console.log(somarNumeros(50,50))

//ex: arrow function com return automatico
somarNumeros2 = (value1, value2) => value1 + value2
console.log(somarNumeros2(200,800))




//ex: quando em uma unica linha o return ja vem automaticamente
myName = (name) => `Meu nome é ${name}`
myName2 = name => {console.log(`Meu nome é ${name}`)} // quando tem apenas 1 parametro o parentese é opcional

console.log(myName('Vagner'))
myName2('Joao')