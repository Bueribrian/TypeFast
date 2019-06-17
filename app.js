window.onload = function(){
    gameOn()
}
//Globals
const lvls = {
    level1:{ seconds: 5 },
    level2:{ seconds: 4 },
    level3:{ seconds: 2 }
}
let dificult = lvls.level1
let seconds = dificult.seconds
let points = 0
let gameState

const word = document.querySelector('#word')
const secondsDiv = document.querySelector('#seconds')
const inputWord = document.querySelector('#wordInput')
const gameStatus = document.querySelector('#gameState')
const nivelDiv = document.querySelector('#msg-lvl')
const msgSec = document.querySelector('#msg-sec')
const pointsDiv = document.querySelector('#score-number')
//Words
const words = [
    'Fotocopia',
    'Celebridad',
     'Barrio',
     'Langosta',
     "Rutas",
     'Evadir',
     'Ley',
     'Zancos',
     'Farola',
     'Furioso',
    'Almanaque',
    'Espectador',
    'Arrestar',
    'Subir',
    'Edulcorante',
    'Segundos',
    'Comprar',
    'Fina',
    'Tranquilo',
    'Guillotina',
    'Vocal',
    'Convertir',
    'Plenitud',
    'Rubio',
    'Telescopio',
    'Punto',
    'Tripa',
    'Sendero',
    'Verso',
    'Golondrina',
    'Marsupial',
    'Enchufe',
    'Gasolina',
    'Escalera',
    'Esqueleto'
]

function gameOn(){
    gameStatus.innerHTML = 'Jugando...'
    if(dificult === lvls.level1){
        nivelDiv.innerHTML = 'Facil'
    }else if(dificult === lvls.level2){
        nivelDiv.innerHTML = 'Medio'
    }else{
        nivelDiv.innerHTML = 'Dificil'
    }
    msgSec.innerHTML = seconds
    //Genero una palabra
    wordGenerate()


    inputWord.addEventListener('input',startMatch)

    setInterval(checkSeconds,1000)
    setInterval(checkStatus,50)
}

function startMatch(){
    
    if(matchWords()){
        gameState = true
        wordGenerate()
        seconds = dificult.seconds + 1
        points++
        pointsDiv.innerHTML = points
        if(points == 10){
            dificult = lvls.level2
        }else if(points == 10){
            dificult = lvls.level3
        }
        if(dificult === lvls.level1){
            nivelDiv.innerHTML = 'Facil'
            msgSec.innerHTML = seconds
        }else if(dificult === lvls.level2){
            nivelDiv.innerHTML = 'Medio'
            msgSec.innerHTML = seconds
        }else{
            nivelDiv.innerHTML = 'Dificil'
            msgSec.innerHTML = seconds
        }
    }
    
}
function matchWords(){
    if(word.innerHTML === inputWord.value){
        gameStatus.innerHTML = 'Correct'
        inputWord.value = ''
        return true
    }else{
        gameStatus.innerHTML = ''
        return false
    }
}

function checkSeconds (){
    if(seconds > 0){
        seconds--
    }else if(seconds === 0){
        gameState = false
    }
    secondsDiv.innerHTML = seconds
}

function wordGenerate(){
    let randomNumber = Math.ceil(Math.random(0,1)*words.length-1)
    let randomWord = words[randomNumber].toLowerCase()
    word.innerHTML = randomWord 
}

function checkStatus(){
    
    if(!gameState && seconds === 0){
        gameStatus.innerHTML = 'Game over'
        points  = -1
        dificult = lvls.level1
    }
    
}

