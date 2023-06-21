//! FOR IN - estrutura de repetição / LOOP

//? serve para iterar item por item de um objeto



const user =  { name:' Vagner', number:' (99) 99999-9999', adress:' Rua A' }

console.log(user.name) // acessando valor de name jeito 1

console.log(user['name']) // acessando valor de name jeito 2

// ex: percorre um objeto

for (const key in user) {

    console.log(key)
}

// ex: percorre valores do objeto
for (const key in user) {

    console.log(key + user[key])
}

for (const key in user) {

    console.log(key + ":" + user[key])
}

for (const key in user) {

    console.log(`${key}:${user[key]}`)
}


























