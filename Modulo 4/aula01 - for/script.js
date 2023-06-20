//! FOR - LOOP ou LAÇO de repetição

/*

- FOR

1) INICIALIZAÇÃO: Criar uma variável e colocar um valor inicial para ela
2) CONDIÇÃO: Enquanto for true, o laço continuará interando
             Ele irá verificar antes de cada iteração
3) EXPRESSÃO FINAL: O que irá ocorrer a cada vez que o nosso laço der uma volta


for([inicialização]; [condição]; [expressão final]){
    seu código aqui
}
*/

for (let i = 0; i < 25; i++) {
    console.log(i)
}

//* exemplo: 

const person = [
    "joao", "Maria", "pedro",
    "paulo", "Luiz", "joao",
    "Maria", "pedro", "paulo",
    "Luiz", "joao", "Maria",
    "pedro", "paulo", "Luiz",
    "joao", "Maria", "pedro",
    "paulo", "Luiz", "joao",
    "Maria", "pedro", "paulo",
    "Luiz", "joao", "Maria",
    "pedro", "paulo", "Luiz",]

    //! o loop usa o array como condição,o .length verifica quantos itens
    //! existem no array, a variável dentro do for lista os itens de cada posição
    //! o console.log imprime os itens
    for (let i = 0; i < person.length; i++) {
        const element = person[i];

        console.log(element)
        
    }