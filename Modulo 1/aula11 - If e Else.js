// If e Else : se e se não - um controlador de fluxo usado para decidir que 
// ações o computador vai executar. 

// IF(se) -> Faça Isso
// ELSE( se não) - Faça Isso

// OPERADORES DE COMPARAÇÃO

// > Maior que
// < Menor que
// == igual que

// EXEMPLO

const notaDoAluno = 8

const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
    // executado quando é verdadeiro
    console.log('Aluno foi Aprovado')
} else{
    // executado quando é falso
    console.log('Aluno foi Reprovado')
}


const senha = 123456
const senhaDigitada = 123457

if(senha == senhaDigitada){
    console.log('Logado com sucesso')
} else{
    console.log('Senha incorreta')
}