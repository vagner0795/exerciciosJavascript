//! Else if -> adiciona mais uma opção de if, pode ser usado quantas vezes quiser


const temperature = 41

if(temperature === 36){
    console.log('Estou saudável')
} else if(temperature > 36 && temperature <= 40){
    console.log('Estou Febre')

}  else if(temperature > 36 && temperature >= 40){
    console.log('Estou com muita Febre')

} else{
    console.log('Estou Hipotermia')

}