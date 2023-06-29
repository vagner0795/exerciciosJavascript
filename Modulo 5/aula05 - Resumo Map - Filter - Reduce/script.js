//! RESUMO MAP - FILTER - REDUCE

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

//? Adicionar 10% de valor de mercado a todas companhias -> MAP
//* Filtrar somente compahias fundadas abaixo de 1990 -> FILTER
//! Somar o valor de mercado das restantes -> REDUCE


const updateValueCompanies = companies.map(companies => {

    return {
        name: companies.name,
        marketValue: Math.floor(companies.marketValue * 1.1),
        CEO: companies.CEO,
        foundedOn: companies.foundedOn,
    }
})

console.log(updateValueCompanies)


const filterCompanies = updateValueCompanies.filter(item => item.foundedOn < 1990)

console.log(filterCompanies)

const totalValuecompanies = filterCompanies.reduce((acc, marketValue) => acc + marketValue.marketValue, 0)

console.log(totalValuecompanies)


// RESOLUÇÃO I

const marketValueOldCompanies = companies.map(company => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
})
    .filter(company => company.foundedOn < 1990)
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log(marketValueOldCompanies)

// RESOLUÇÃO II

const companies2 = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const add10Percent = (company) => {
    company.marketValue = company.marketValue + company.marketValue / 10

    return company
}

const filterOldCompany = (company) => company.foundedOn < 1990

const totalValueFilteredCompanies = (acc, company) => acc + company.marketValue


const resultMarketValue = companies2
    .map(add10Percent)
    .filter(filterOldCompany)
    .reduce(totalValueFilteredCompanies, 0)

console.log(resultMarketValue)

//! Exercício 2

//! Subtrair 10% do valor de mercado das empresas
//? Filtrar somente companhias fundadas depois de 1980
//* Somar o valor de mercado das empresas filtradas

const companies3 = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const calcValueCompany = (company) => {
    company.marketValue = company.marketValue - company.marketValue / 10

    return company
}

const ageCompany = (company) => company.foundedOn > 1980

const finalValueCompanies = (acc, company) => acc + company.marketValue

const resultMarketValueFall = companies3
.map(calcValueCompany)
.filter(ageCompany)
.reduce(finalValueCompanies, 0)

console.log(resultMarketValueFall)