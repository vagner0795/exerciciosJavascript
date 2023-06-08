// document -> HTML
//! Eventos - ações feitas pelo usuário da página

//? exemplos: 
//* Usuario clica em um botão e isso gera uma ação
//* Usuario passa o mouse sobre um botão, gera uma ação

//! Todos os eventos começam com ON, ex: onClick

// exemplo: função que imprime o valor digitado no input


function cliqueiNoBotao(){
    console.log(input.value)
}


// exemplo: função que imprime mensagem no console

const input = document.querySelector('#main-input')

function digiteiNoInput(){
    console.log('fui clicado')
}

const text = document.querySelector('.new-text')

text.innerHTML = ''

console.log(text)