/////////////// JavaScript Dadi
console.log('JS Trial')

const userNumberButtonDOMElement = document.getElementById('user-number-button')
const userNumberDomElement = document.getElementById('user-number')
const pcNumberDOMElement = document.getElementById('pc-number')
const resultDOMElemennt = document.getElementById('result')

//const numbers = [];


userNumberButtonDOMElement.addEventListener('click', function(){

    const UserRandomNumber = (Math.floor(Math.random() * 6) + 1)
    const PcRandomNumber = (Math.floor(Math.random() * 6) + 1)

    userNumberDomElement.innerHTML = 'Tu: ' + UserRandomNumber;
    pcNumberDOMElement.innerHTML = 'PC: ' + PcRandomNumber;

    if(UserRandomNumber > PcRandomNumber){
        resultDOMElemennt.innerHTML = 'Congratulazioni Hai Vinto!'
    }else if(UserRandomNumber === PcRandomNumber){
        resultDOMElemennt.innerHTML = 'Pareggio!'
    }else{
        resultDOMElemennt.innerHTML = 'Hai Perso, ritenta!'
    }
})








// for(let iterations = 1; iterations <= 1; iterations++){
//     const randomNumber = (Math.floor(Math.random() * 6) + 1)
//     numbers.push(randomNumber);

//     

// }