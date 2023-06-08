// document -> HTML
//! addEventListener - adiciona um ouvidor de eventos


const input = document.querySelector('#main-input')
const select = document.querySelector('select')
const button = document.querySelector('.main-button')

// addEventListener exemplo 1

select.addEventListener('change', function(){
    console.log('fui trocado')
})

// addEventListener exemplo 2

//geralmente a função recebe parametros e normalmente esse parametro é chamado de event
function troqueiDeValor(event){
    console.log(event)
}

select.addEventListener('change', troqueiDeValor) // mostra que o valor do select foi alterado

input.addEventListener('keypress', function(){
    console.log(input.value)
}) // mostra que tecla foi pressionada / mostra no console a tecla

button.addEventListener('click', function(event){
    console.log(event)
}) // avisa quando o botão foi clicado