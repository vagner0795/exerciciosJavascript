// Objeto JavaScript - cada objeto tem uma propriedade e cada propriedade tem um valor

// Podemos agrupar informações no mesmo lugar.


// dados sem o objeto
const name = 'Vagner'
const age = 27
const adress = " Rua dos bobos Nº 0"


// Objeto : para criar um objeto criamos uma variável e dentro dela usamos {} chaves
const vagner = {
    name: 'Vagner',
    age: 27,
    adress: 'Rua dos bobos Nº 0'
}

console.log(vagner)

// podemos guardar quantas informações quisermos

// podemos guardar objeto dentro de objetos

const vagner2 = {
    name: 'Vagner',
    age: 27,
    adress: {
        street: 'Rua dos Bobos',
        number: '0',
        cep: "49100-000",
        city: 'São Cristóvão',
        state: 'SE',
        country: "Brasil"
    }

}

// também podemos acessar um dado específico.
console.log(vagner2) // ao executar exibe todos os itens do objeto
console.log(vagner2.name)
console.log(vagner2.age)
console.log(vagner2.adress)
console.log(vagner2.adress.cep)
console.log(vagner2.adress.city)
console.log(vagner2.adress.state)
console.log(vagner2.adress.street)

// Podemos também atualizar os dados quando usamos Let

let vagner3 = {
    name: 'Vagner',
    age: 27,
    adress: {
        street: 'Rua dos Bobos',
        number: 0,
        cep: "49100-000",
        city: 'São Cristóvão',
        state: 'SE',
        country: "Brasil"
    }

}

vagner3.adress.number = 50
vagner3.age = 30

console.log(vagner3) // ao executar o código o numero altera