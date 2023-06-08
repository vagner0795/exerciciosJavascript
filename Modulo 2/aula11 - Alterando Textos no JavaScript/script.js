// document -> HTML
//! Alterando TEXTOS

const paragraph = document.querySelector('.paragraph-js')



// Formas de pegar ou alterar os elementos

console.log(paragraph.innerText) //! HTML E CSS - considera a estilização do html

console.log(paragraph.textContent) //! SÓ HTML - ignora css e tags no elemento

console.log(paragraph.innerHTML) //! TRÁS TUDO inclusive o elemento html dentro do texto, e permite adicionar html 

// ambos trazem o texto dentro do elemento

paragraph.innerHTML = 'My New Text <b>Hello world</b> <br> <p> User name: vagner </p>  <p> Email: vagner@vagner.net </p>'

//! o innerHTML é usado com mais frequencia

text.innerHTML = '' // ao usar o elemento seguido de innerHTML = vazio, ele remove o conteúdo





