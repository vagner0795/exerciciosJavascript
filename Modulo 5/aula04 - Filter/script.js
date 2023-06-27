//! Filter - Filtrar 

/*
    FILTER
        - Cria um novo array, a partir do array percorrido(array original)
        - Cria um novo array APENAS com os elementos filtrados
        - Aceita 3 parâmetros
            - item do array
            - index
            - array completo

            return true -> Item atual passa para o novo array
            return False -> Item atual NÃO passa para o novo array


*/

const list = [20, 3, 234, 17, 12, 541, 6, 87, 275, 1000]

const newList = list.filter( number => number > 100) // numeros maiores que 100
console.log(newList)

const newList2 = list.filter( number => number < 100) // numeros menores que 100
console.log(newList2)

const newList3 = list.filter( number => number % 2 === 0) // numeros divisiveis por 2
console.log(newList3)


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const newCompanies = companies.filter((company) => {
   if( company.marketValue < 200 && company.foundedOn > 1990) {
    return true
   } else return false
})

console.log(newCompanies)

const newCompanies2 = companies.filter((company) =>  company.marketValue > 200 && company.foundedOn > 1970)

console.log(newCompanies2)