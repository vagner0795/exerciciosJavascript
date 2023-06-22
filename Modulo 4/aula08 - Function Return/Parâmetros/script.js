//! Function - Return

/*
    FUNCTION / FUNÇÕES:

    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função

 */


function sum1(value1, value2) { //void
    console.log(value1 + value2)
}

function sum2(value1, value2) { //return
    return value1 + value2
}

function sum3(value1, value2) { //return e variavel
    const result = value1 + value2
    return result
}



sum1(50, 20)

const myResult = sum2(10, 20)

console.log(myResult + ' resultado')

const result2 = sum3(50, 2)

console.log(result2 + ' resultado')


/**
    Calcular Desconto:
    Todos os produtos acima de R$ 30,00 tem desconto de 10%

*/

const cart = [10, 30, 60,200, 450, 65, 12, 95,200, 450, 65, 12, 95,200, 450, 65, 12, 95 ]  // carrinho de compras

let finalValue = 0 // valor final, começando de zero
let buyValue = 0 // valor da compra sem desconto

function desconto(value, discount) { // função que calcula o desconto
    const result = (value * discount) / 100
    return result
}

cart.forEach(value => {
    buyValue = buyValue + value
});

console.log(`o valor total foi R$ ${buyValue}`)


cart.forEach(value => { // loop para percorrer o carrinho de compra e somar os valores, dar desconto aos produtos acima de 30 reais
    if (value > 30) {
        const discount = desconto(value, 10)
        finalValue = finalValue + (value - discount)
    } else {
        finalValue += value
    }
});

let discontValue = buyValue - finalValue //calculo do desconto
 console.log(`O valor do desconto foi ${discontValue}`)



console.log(`O valor final foi de R$ ${buyValue.toFixed(2)}, 
porém voce teve desconto, e irá pagar apenas R$ ${finalValue.toFixed(2)}, 
você economizou R$ ${discontValue.toFixed(2)}`) 