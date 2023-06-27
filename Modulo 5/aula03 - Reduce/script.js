//! REDUCE - Reduzir um Elemento

/*
    REDUCE 
        - Retorna um valor ( pode ser um novo array, objeto, string, number, etc.)
        - Aceita 4 parâmetros:
            - acumulador
            - valor atual
            - index
            - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const soma = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

console.log(soma)

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const value = companies.reduce((acc, valorTotal) => {
    return acc + valorTotal.marketValue
},0)

console.log(value)

const cart = [
    { productName: 'Abóbora', valueKg: 5, kg: 1},
    { productName: 'Pepino', valueKg: 3.55, kg: 1.3},
    { productName: 'Limão', valueKg: 1.2, kg: 2},
    { productName: 'Abacate', valueKg: 5.4, kg: 1.67},
    { productName: 'Morango', valueKg: 11.9, kg: 3},
]

const valueCart = cart.reduce(( acc, totalValue) =>{
    return acc + (totalValue.valueKg * totalValue.kg)
},0)

console.log(valueCart.toFixed(2))


const phones = [
    { name: 'Iphone', value: 8000, quantity: 2},
    { name: 'Samsung', value: 3000, quantity: 4},
    { name: 'Motorola', value: 1500, quantity: 10},
    { name: 'Xiaomi', value: 2000, quantity: 5},
]

const sumCart = phones.reduce((acc, valuePhones) => {
    return acc + (valuePhones.value * valuePhones.quantity)
},0)

console.log(sumCart.toFixed(2))

console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumCart));