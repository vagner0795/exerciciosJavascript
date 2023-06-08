// document -> HTML
//! Alterando CSS

const button = document.querySelector('.main-button')
const title = document.querySelector('h1')



// Formas de alterar CSS com JavaScript

button.style.color = "blue" // altera a cor da fonte para azul

button.style.padding = "10px" // adiciona um espaçamento interno ao botão

button.style.background = "red" // altera o background do botão para vermelho

button.style.cursor = 'pointer' // adiciona cursor pointer ao botão

//! Quando a propriedade for separada por ' - ' a primeira letra da segunda palavra deve ser maiúscula
// ex: background-color -> backgrounColor = '#00ff00'

button.style.minWidth = '150px' // define que a largura mínima será de 150px

button.style.marginLeft = '100px'

title.style.color = 'red' // altera cor do texto para vermelho

title.style.fontSize = '50px' // aumenta o tamanho do texto

title.style.fontFamily = 'arial' // troca a fonte para arial