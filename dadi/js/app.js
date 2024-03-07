/////////////// JavaScript Dadi
console.log('JS Trial')

/// Creo una costante che corrisponda al bottone per il gioco dei dadi 
const userNumberButtonDOMElement = document.getElementById('user-number-button')
/// Creo una costante che corrisponda al numero del giocatore
const userNumberDomElement = document.getElementById('user-number')
/// Creo una costante che corrisponda al numero del computer
const pcNumberDOMElement = document.getElementById('pc-number')
/// Creo una costante che corrisponda al risultato della partita
const resultDOMElement = document.getElementById('result')


//console.dir(resultDOMElement)



/// Aggiungo un eventListener(click) al bottone per il gioco dei dadi
userNumberButtonDOMElement.addEventListener('click', function(){
    /// Creo una costante che generi un numero casuale per l'utente   
    const UserRandomNumber = (Math.floor(Math.random() * 6) + 1)
    /// Creo una costante che generi un numero casuale per il computer
    const PcRandomNumber = (Math.floor(Math.random() * 6) + 1)

    /// Modifico l'innerHTML dell'elemento del numero del giocatore in modo che mostri il numero casuale, quando premo sul bottone
    userNumberDomElement.innerHTML = 'Tu: ' + UserRandomNumber;
    /// Modifico l'innerHTML dell'elemento del numero del computer in modo che mostri il numero casuale, quando premo sul bottone
    pcNumberDOMElement.innerHTML = 'PC: ' + PcRandomNumber;

    
    /// Creo una condizione: SE il numero del giocatore è maggiore del numero del computer
    if(UserRandomNumber > PcRandomNumber){
        /// Verrà modificato l'innerHTML del relativo elemento in modo da mostrare il risultato adeguato con le classi adeguate
        resultDOMElement.innerHTML = `<div class="text-blue"><h1>Hai Vinto!</h1></div>`
        
    /// ALTRIMENTI SE il numero del giocatore è inferiore rispetto al numero del computer    
    }else if(UserRandomNumber < PcRandomNumber){
        /// Verrà modificato l'innerHTML del relativo elemento in modo da mostrare il risultato adeguato con le classi adeguate
        resultDOMElement.innerHTML = `<div class="text-red"><h1>Hai Perso, Ritenta!</h1></div>`
    /// ALTRIMENTI SE i due numeri sono ugali    
    }else{
        /// Verrà modificato l'innerHTML del relativo elemento in modo da mostrare il risultato adeguato con le classi adeguate
        resultDOMElement.innerHTML = `<div class="text-purple"><h1>Pareggio!</h1></div>`
        
    }
})








// for(let iterations = 1; iterations <= 1; iterations++){
//     const randomNumber = (Math.floor(Math.random() * 6) + 1)
//     numbers.push(randomNumber);

//     

// }