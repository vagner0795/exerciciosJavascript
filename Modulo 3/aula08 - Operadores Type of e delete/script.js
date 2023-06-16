//! Operadores Typeof e Delete

/*  

tyoeof -> Tipo de dado

delete - Apagar


 */

// Operador && 

const person = {
    name: 'vagner',
    age: 27,
    sex: 'Male'
}


const number = 100

const address = 'Rua dos bobos Nº 0'

delete person.sex

console.log( typeof person)
console.log( typeof number)
console.log( typeof address)
console.log(person)
