//! Projeto Functions

const result = document.querySelector('.result')
const myScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissor' && machine === 'paper') ||
        (human === rock && machine === 'scissor')) {

        result.innerHTML = 'Você ganhou!! 😃😃😃'
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber

    } else {

        result.innerHTML = 'Você perdeu 😔😔😔'
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}