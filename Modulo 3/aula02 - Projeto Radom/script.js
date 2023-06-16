const button = document.querySelector('.button')
const textResult = document.querySelector('.result')




button.addEventListener('click', function () {
    const inputMinNumber = Math.ceil(document.querySelector('.input-min').value)
    const inputMaxNumber = Math.floor(document.querySelector('.input-max').value)
    const result = Math.floor(Math.random() * (inputMaxNumber - inputMinNumber + 1)) + 1

    if (inputMaxNumber <= inputMinNumber) {
        textResult.innerHTML = `O valor mínimo não pode ser maior que o máximo`
    } else {

        textResult.innerHTML = `${result}`
    }


})