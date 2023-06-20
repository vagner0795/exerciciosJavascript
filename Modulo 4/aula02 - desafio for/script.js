//! DESAFIO USANDO FOR:
//? Desenvolver uma aplicação que busca o número de telefone do usuário
//? se o numero existir, imprima na tela. se não, imprima mensagem que o numero não existe


let p = document.querySelector('p')
let span = document.querySelector('span')

let input = document.querySelector('input')

let button = document.querySelector('button')


const contatcs = [
    { name: 'Vagner', number: '(99) 99999-9999', adress:' Rua A' },
    { name: 'Joao', number: '(99) 88888-8888', adress:' Rua B' },
    { name: 'Maria', number: '(99) 97777-7777', adress:' Rua C' },
    { name: 'Pedro', number: '(99) 96666-6666', adress:' Rua D' },
    { name: 'Paulo', number: '(99) 91234-5678', adress:' Rua E' },
    { name: 'Lucas', number: '(99) 91111-1111', adress:' Rua F' },
]


function search() {

    for (let i = 0; i < contatcs.length; i++) {

        if (input.value.toLowerCase() === contatcs[i].name.toLowerCase()) {
            p.innerHTML = `Nome: ${contatcs[i].name} Número: ${contatcs[i].number}`
            span.innerHTML = contatcs[i].adress
            break
        } else {
            p.innerHTML = 'Numero não encontrado'
        }
    }
}


button.addEventListener('click', search)






const inputValue = input.value
console.log(inputValue)





