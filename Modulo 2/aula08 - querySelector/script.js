// document -> HTML
//! querySelector -> trás apenas o PRIMEIRO elemento que encontrar
//? ele trás qualquer elemento, seja tag, class(".name") ou id("#name")
//* também podemos especificar a busca quando temos mais de um elemento com a mesma classe. ("element.name"

const element = document.querySelector('button')
const element2 = document.querySelector('.paragraph-js')
const element3 = document.querySelector('#main-input')
const element4 = document.querySelector('h3.paragraph-js')

console.log(element)
console.log(element2.innerHTML)
console.log(element3)
console.log(element4.innerText)










