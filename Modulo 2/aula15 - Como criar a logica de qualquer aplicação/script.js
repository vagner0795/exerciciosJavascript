// document -> HTML
//! Como desenvolver a lógica de qualquer aplicação

// Lógica de programação : os passos que o computador deve seguir para executar a aplicação

// sempre dividir em micro tarefas, e ir resolvendo todas as etapas.


//! aplicação que retorna uma frase na tela ao clicar o botão:

//? 1º passo: pegar o valor do input

const input = document.querySelector('#main-input')


input.addEventListener('keypress', function(){
    console.log(input.value)
})

//? 2º passo pegar o clique no button

const button = document.querySelector('.main-button')

button.addEventListener('click', function(){
    console.log('fui clicado')
})

//? 3º passo adicionar um texto abaixo do botão

const text = document.querySelector('.my-text')


button.addEventListener('click', function(){
    text.innerHTML = input.value
})

