// NULL e UNDEFINED - valor nulo e valor indefinido

// Null: valor é nulo, geralmente não foi definido de propósito e pode ser
// alterado a qualquer momento.


const user = {
    name: 'Joao',
    age: 20,
    conjuge: null,

}

console.log(user) // retorna comjuge null

// Definindo valor para null:
const user2 = {
    name: 'Joao',
    age: 20,
    conjuge: null,

}

user2.conjuge = 'Joana'

console.log(user2) // retorna conjuge joana

// Undefined : erro indicando que valor não foi definido

console.log(user.adress) // retorna undefined