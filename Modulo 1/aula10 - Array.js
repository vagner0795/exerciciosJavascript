// Array - estrutura de dados usada para armazenar / organizar dados.
// também chamado de vetor ou matriz

// para criar um array usa o cochetes [] e cada item é separado por vírgula

const myArray = [10, '20', 'Trinta', true, false, 40, { name: 'vagner', age: 30, country: 'Brasil' }]

console.log(myArray)
console.log(myArray[2])

// objetos fora do array

const vagner = {
    name: 'vagner',
    age: 27,
    gender: 'Masculino',
    country: 'Brasil'
}
const joao = {
    name: 'joao',
    age: 30,
    gender: 'Masculino',
    country: 'Brasil'
}
const Mary = {
    name: 'Mary',
    age: 35,
    gender: 'Masculino',
    country: 'Brasil'
}

// objetos dentro de um array

const users = [
    {
        name: 'vagner',
        age: 27,
        gender: 'Masculino',
        country: 'Brasil'
    },
    {
        name: 'joao',
        age: 30,
        gender: 'Masculino',
        country: 'Brasil'
    },
    {
        name: 'Mary',
        age: 35,
        gender: 'Feminino',
        country: 'Brasil'
    }

]

console.log(users)

// retornando determinado item do array, o primeiro item é sempre 0


const numbers = [10, 20, 30, 40, 50]

console.log(numbers[0]) // retorna 1º item
console.log(numbers[1]) // retorna 2º item
console.log(numbers[2]) // retorna 3º item
console.log(numbers[3]) // retorna 4º item
console.log(numbers[10]) // retorna undefined : posição não existe

numbers[1] = 100

console.log(numbers)



const persons = [
    {name: 'Peter', age: 17},
    {name: 'Paul', age: 17},
    {name: 'Mary', age: 17},
    {name: 'John', age: 17},
    {name: 'Micheal', age: 17},
]


console.log(persons[1].name)
console.log(persons[2].age)