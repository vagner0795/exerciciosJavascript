//! Map - part.2

// Desafio MAP - Quem for VIP pulseira preta, quem não for VIP pulseira verde

const list = [
    {name: 'Vagner', vip: true},
    {name: 'Joao', vip: true},
    {name: 'Maria', vip: false},
    {name: 'Jose', vip: true},
    {name: 'Carlos', vip: false},
    {name: 'Pedro', vip: true},
    {name: 'Joana', vip: false},
    {name: 'Zezinho', vip: true},
    {name: 'Carlos José', vip: false},
    {name: 'Antonio', vip: false},
]

list.map(item => {
    if(item.vip === true){
        console.log(`${item.name} é um convidado VIP: Pulseira Preta`)
    } else{
        console.log(`${item.name} é um convidado COMUM: Pulseira Verde`)

    }
})


const newList = list.map( user => {
    return {
        name: user.name,
        braceletColor: user.vip ? 'Black' : 'Green' // if e else operador ternario
    }
})
console.log(newList)


//! DESAFIO 2


const studants = [
    { name: 'Vagner', grade: 7},
    { name: 'Nicoly', grade: 9},
    { name: 'Joao', grade: 6},
    { name: 'Pedro', grade: 5},
    { name: 'Maria', grade: 6},
    { name: 'Zezinho', grade: 4},
    { name: 'Xavier', grade: 10},
    { name: 'Otto', grade: 0},
]

const result = studants.map( studants => {
    return {
        name: studants.name,
        finalResult: studants.grade > 7 ? 'Aprovado' : 'Reprovado'
    }
})

console.log(result)