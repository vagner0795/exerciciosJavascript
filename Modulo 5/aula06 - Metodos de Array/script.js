//! MÉTODOS DE ARRAY - Ferramentas que auxiliam na manipulação de arrays

/*
    ARRAY's

        - push -> Adiciona mais um item ao array
        - lenght -> Mostra o tamanho do array
        - sort -> Organiza o array
        - delete -> Deleta o item de uma posição do array
        - every -> Esse método testa se todos os elementos do Array passam em uma condição Passamos uma função que retorna true ou false. 
            Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. 
            Se algum item não estiver de acordo, ele retornará false.
        - some -> Faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. 
            O .some() retorna true se pelo menos um elemento do Array passar no teste.
        - fill ->  Preenche posições do array como desejarmos
        - find ->  Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false.
            O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
        - findIndex ->  Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
        - concat -> Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
        - includes -> Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
        - join ->  O método join() junta todos os elementos de um array.
        - slice ->  O método slice() retorna um novo array, apenas com as informações escolhidas
        - splice -> Esse metódo remove ou adiciona elementos em um array em uma posição específica.
        - pop ->  Remove o último elemento de um array.
        - shift -> Remove o primeiro elemento de um array.


*/


//? ex: push - pode ser usado quantas vezes quiser

const myArray = [1, 2, 3, 4, 5]

myArray.push(6)
myArray.push('sete')
console.log(myArray)

//? ex: length 
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myArray2.length)


//? ex: sort

const myArray3 = ['zebra', 'pinguim', 'macaco', 'peixe', 'abelha', 'cabra', 'bode', 'leão']

myArray3.sort()
console.log(myArray3)

//? ex: delete 

const myArray4 = ['zebra', 'pinguim', 'macaco', 'peixe', 'abelha', 'cabra', 'bode', 'leão']

delete myArray4[0]

console.log(myArray4)

//? ex: every - se todos for true, retorna true. se 1 for false, retorna false

const users = [
    {name: 'Vagner', credit: 6000},
    {name: 'Nicoly', credit: 2500},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

const isTrue = users.every(user => user.credit > 500)
console.log(isTrue)

//? ex: some - se todos for false, retorna false. se 1 for true, retorna true

const users2 = [
    {name: 'Vagner', credit: 6000},
    {name: 'Nicoly', credit: 2500},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

const isTrue2 = users.some(user => user.credit < 6000)
console.log(isTrue2)

//? ex: fill

const numeros = [1, 2, 3, 4, 5, 6, 7]

numeros.fill('oito', 0, 2) // 3 parametros: 1 o item, 2posição inicial, 3 posição final

console.log(numeros)

//? ex: find

const users3 = [
    {name: 'Vagner', credit: 6000},
    {name: 'Nicoly', credit: 2500},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

const findUser = users3.find( user =>  user.name ===  'Vagner')

console.log(findUser)

//? ex: findIndex - quando não encontra a posição: retorna -1

const users4 = [
    {name: 'Vagner', credit: 6000},
    {name: 'Nicoly', credit: 2500},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

const findUser2 = users4.findIndex( user =>  user.name ===  'Vagner')

console.log(findUser2)

//? ex: concat

const people = [
    {name: 'Vagner', credit: 6000},
    {name: 'Nicoly', credit: 2500},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

const people2 = [
    {name: 'Mateus', credit: 6000},
    {name: 'Pedro', credit: 2500},
    {name: 'Felipe', credit: 4000},
    {name: 'Lucas', credit: 2000},
    {name: 'Deivin', credit: 600},
]

const people3 = people.concat(people2)

console.log(people3)

//? ex: join pode separar por virgula ou por qualquer elemento que esteja entre aspas

const elements = ['Fire', 'Air', 'Water', 'Earth']

const myElements = elements.join()
const myElements2 = elements.join(' ')
const myElements3 = elements.join(' - ')

console.log(myElements)
console.log(myElements2)
console.log(myElements3)


//? ex: pop - remove o ultimo item

const user = [
    {name: 'Vagner', credit: 6000},
    {name: 'Nicoly', credit: 2500},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

user.pop()
console.log(user)

//? ex: shift - remove o primeiro item

const user2 = [
    {name: 'Nicoly', credit: 2500},
    {name: 'Vagner', credit: 6000},
    {name: 'Stefany', credit: 4000},
    {name: 'Maria', credit: 2000},
    {name: 'Marcia', credit: 600},
]

user.shift()
console.log(user2)


//? ex: slice 

const names = ['Nicoly', 'Vagner', 'Stefany', 'Maria', 'Marcia']

const newNames = names.slice(0,2) // 1 posição define onde começa e 2 posição define onde termina
console.log(newNames)


//? ex: splice 

const names2 = ['Nicoly', 'Vagner', 'Stefany', 'Maria', 'Marcia']

names2.splice(4, 4, 'Aldebaram') // 1 posição define onde começa e 2 posição define onde termina 3 o novo valor que será adicionado ao array
names2.splice(2, 4, 'Julinha') // 1 posição define onde começa e 2 posição define onde termina 3 o novo valor que será adicionado ao array
console.log(names2)

