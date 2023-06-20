//! FOR OF - estrutura de repetição / LOOP

//? serve para iterar item por item de uma string ou de um array


const myName = 'Vagner'

const contatcs = [
    { name: 'Vagner', number: '(99) 99999-9999', adress:' Rua A' },
    { name: 'Joao', number: '(99) 88888-8888', adress:' Rua B' },
    { name: 'Maria', number: '(99) 97777-7777', adress:' Rua C' },
    { name: 'Pedro', number: '(99) 96666-6666', adress:' Rua D' },
    { name: 'Paulo', number: '(99) 91234-5678', adress:' Rua E' },
    { name: 'Lucas', number: '(99) 91111-1111', adress:' Rua F' },
]


// ex: percorre a string e retorna as letras
for (const letter of myName) {
    console.log(letter)
}

//! exercício

const input = document.querySelector('input')
const p = document.querySelector('p')
const button = document.querySelector('button')




function search(){
    for (const users of contatcs) {
        if( input.value.toLowerCase() === users.name.toLowerCase()){
            p.innerHTML = `O numero é ${users.number}`
            

            break
        } else{
            p.innerHTML = 'Número não encontrado'

        }
    }
}

button.addEventListener('click', search)







