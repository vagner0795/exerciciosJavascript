//! Operadores Lógicos

/*  

    && -> E -> Pessoa exigente

    true && true = true
    true && false = false
    false && false = false

    || -> Ou -> Tanto faz

    true || true = true
    true || false = true
    false || false = false

    ! -> Negação

    !true = false
    !false = true

    

 */

// Operador && 

console.log(true && true && true)
console.log(true && true && false)
console.log(false && false && false)


// Operador || ->  Ou 

console.log(true || true || true)
console.log(true || true || false)
console.log(false || false || false)

// Operador ! -> Negação

console.log(!true)
console.log(!false)

//! exelplo


const senha = true
const token = true
const conta = true

if (senha && token && conta) {
    console.log('Logado com Sucesso!')
} else {
    console.log('FALHA na Autenticação')

}
if (senha || token || conta) {
    console.log('Logado com Sucesso!')
} else {
    console.log('FALHA na Autenticação')
}
