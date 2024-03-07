/////////////// JavaScript Dadi
console.log('JS Trial')

const userNumberButtonDOMElement = document.getElementById('user-number-button')
const userNumberDomElement = document.getElementById('user-number')
const pcNumberDOMElement = document.getElementById('pc-number')
const resultDOMElement = document.getElementById('result')


console.dir(resultDOMElement)

//const numbers = [];


userNumberButtonDOMElement.addEventListener('click', function(){

    const UserRandomNumber = (Math.floor(Math.random() * 6) + 1)
    const PcRandomNumber = (Math.floor(Math.random() * 6) + 1)

    userNumberDomElement.innerHTML = 'Tu: ' + UserRandomNumber;
    pcNumberDOMElement.innerHTML = 'PC: ' + PcRandomNumber;

    

    if(UserRandomNumber > PcRandomNumber){
        resultDOMElement.innerHTML = `<div class="text-blue"><h1>Hai Vinto!</h1></div>`
        //'Congratulazioni Hai Vinto!'
        
    }else if(UserRandomNumber < PcRandomNumber){
        
        resultDOMElement.innerHTML = `<div class="text-red"><h1>Hai Perso, Ritenta!</h1></div>`
        
    }else{
        
        resultDOMElement.innerHTML = `<div class="text-purple"><h1>Pareggio!</h1></div>`
        
    }
})








// for(let iterations = 1; iterations <= 1; iterations++){
//     const randomNumber = (Math.floor(Math.random() * 6) + 1)
//     numbers.push(randomNumber);

//     

// }