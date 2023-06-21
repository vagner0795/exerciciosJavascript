//! WHILE & DO WHILE - LAÇOS DE REPETIÇÃO / LOOP

/*
    while -> Verifique se é TRUE e faça
    do while -> Faça, depois verifique se é true




*/

let i = 0

// verifica se a variavel é menor que 5 e executa, e quando é falso ele para de executar
while (i < 5) {
        i++
        console.log(i)
}

// primeiro executa e depois verifica se é true
do {
    i++
    console.log(i)
} while (i < 10);


//! DESAFIO WHILE 


const contatcs = [
    { name: 'Vagner', number: '(99) 99999-9999', adress:' Rua A' },
    { name: 'Joao', number: '(99) 88888-8888', adress:' Rua B' },
    { name: 'Maria', number: '(99) 97777-7777', adress:' Rua C' },
    { name: 'Pedro', number: '(99) 96666-6666', adress:' Rua D' },
    { name: 'Paulo', number: '(99) 91234-5678', adress:' Rua E' },
    { name: 'Lucas', number: '(99) 91111-1111', adress:' Rua F' },
]


const button = document.querySelector('button')
const p = document.querySelector('p')
const input = document.querySelector('input')

function search(){

    let index = 0


    do {
        if(input.value.toLowerCase() === contatcs[index].name.toLowerCase()){
            p.innerHTML = contatcs[index].number
        } else{
            p.innerHTML = 'Numero não encontrado'

        }
        break
        
    } while (index <= contatcs.length);


}


button.addEventListener('click', search)
















