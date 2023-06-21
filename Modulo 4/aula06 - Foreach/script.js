//! FOR EACH - LOOP DE RETETIÇÃO - pode usar 3 informações

/*
    forEach(item, index, array)


*/

const users = [
    { name: 'Vagner', contact: '(99) 99999-9999', adress:' Rua A' },
    { name: 'Joao', contact: '(99) 88888-8888', adress:' Rua B' },
    { name: 'Maria', contact: '(99) 97777-7777', adress:' Rua C' },
    { name: 'Pedro', contact: '(99) 96666-6666', adress:' Rua D' },
    { name: 'Paulo', contact: '(99) 91234-5678', adress:' Rua E' },
    { name: 'Lucas', contact: '(99) 91111-1111', adress:' Rua F' },
]

//! precisa de um array para funcionar, percorre item por item
//! o element é uma variável e pode ter o nome que o usuário desejar
//! para sozinho de iterar, pode ter ate 3 valores forEach(item, index,array)

//! primeiro parametro: item do array, segundo parametro: posição do array e terceiro parametro: array inteiro
//exemplo: 

users.forEach((item, index, array) => {
    console.log(item.name)
    console.log(item)
    console.log(index)
    console.log(array)

    
});

users.forEach(item => {

console.log(`Olá me chamo ${item.name} e meu contato é ${item.contact}`)
    
});

