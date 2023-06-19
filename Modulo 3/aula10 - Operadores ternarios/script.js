//! Operadores ternários - um if else para pequenos trechos de código (no máximo 1 linha)

/* 

? -> if(se)
: -> else(se não)
&& -> (if sem o else)

uma alternativa ao if e else, pode ser usado para reduzir a quantidade de código
*/


const salario = 7000

//? IF e ELSE

if (salario < 3000) {
    console.log(' O colaborador é Dev Júnior')
} else if (salario > 4000 && salario <= 7000) {
    console.log(' O colaborador é Dev Pleno')
} else {
    console.log(' O colaborador é Dev Senior')
}

//? Usando operadores ternários

//if e else
salario < 4000 ? console.log(' O colaborador é Dev Júnior') : console.log(' O colaborador é Dev Senior')

// somente if
salario < 4000 && console.log('O colaborador é Dev Júnior')

// else if

salario < 4000 ? console.log(' O colaborador é Dev Júnior') :  salario >= 4000 && salario <= 7000 ? console.log(' O colaborador é Dev Pleno') : console.log('O colaborador é Dev Senior')

