//! Switch Case - controlador de fluxo " Aceita apenas Valores exatos"

const temperature = 35


switch (temperature) {
    case  10:
        console.log('Ta meio frio')
        
        break;
    case 25:
        console.log('Temperatura normal')

        break;
    case 35:
        console.log('Ta bem quente!')

        break;

    default:
        break;
}


const user = "Mateu"

switch (user) {
    case "Vagner":
        console.log(`Hey ${user} aqui! Eai, tranquilo?`)

        
        break;
    case "Joao":
        console.log(`Hey ${user} aqui! Eai, tranquilo?`)
       
        break;
    case "Mateus":
        console.log(`Hey ${user} aqui! Eai, tranquilo?`)

        break;

    default:
        console.log('Usuario não encontrado')
        break;
}

