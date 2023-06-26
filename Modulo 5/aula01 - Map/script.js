//! Map - serve para mapear um array

/*
    MAP
    
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parametros:
        - Item do array
        - Index
        - Array completo

*/

const number = [1, 2, 3, 4, 5, 6, 7]

const newArray = number.map((item, index, array) => {
    console.log(item + ' item') // item
    console.log(index + ' index') // posição
    console.log(array + ' array') // array original

    return item * 2
})
const newArray2 = number.map(item => item * 3)

console.log(number) // array original
console.log(newArray) //map do item * 2
console.log(newArray2) // map do item * 3 e arrow function


