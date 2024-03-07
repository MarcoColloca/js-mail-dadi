///////////// JAVASCRIPT MAIL
console.log('JS Trial')

/// Dichiaro ed assegno una costante per input della mail di registrazione.
const emailRegistrationDOMElement = document.getElementById('email-registration')

/// Dichiaro ed assegno una costante per input del bottone della mail di registrazione.
const emailRegistrationButtonDOMElement = document.getElementById('email-registration-button')

/// Dichiaro ed assegno una costante per input la validazione della mail.
const emailLogInDOMElement = document.getElementById('email-login')

/// Dichiaro ed assegno una costante per il bottone della validazione della mail.
const emailLogInButtonDOMElement = document.getElementById('email-login-button')




// Creo un Array in cui inserire le varie mail
const emails = [];


// Aggiungo un EventListener(Click), per inserire le mail all'interno dell'array con il click sul bottone
emailRegistrationButtonDOMElement.addEventListener('click', function(){

    // dichiaro una variabile che corrisponda alla value della mail di registrazione
    let email = emailRegistrationDOMElement.value;
    
    // faccio il push della value della mail di registrazione all'interno del mio array
    emails.push(email)
    console.log(emails)
})


// dichiaro una variabile per identificare se la mail dell'untente NON È presente all'interno del mio array
let areEmailsInArray = false;

// Aggiungo un EventListener (Click), per associare il controllo mail al relativo bottone
emailLogInButtonDOMElement.addEventListener('click', function(){

    // Apro un ciclo for in cui vado a controllare se la mail dell'utente corrisponde ad una delle mail all'interno del mio array
    for (let i = 0; i < emails.length; i++){

        // Creo una costante e le assegno la value dell'input per la validazione della mail
        const userEmail = emailLogInDOMElement.value;
        
        // Creo una costante a cui assegno come valore gli elementi all'interno del mio array
        let registeredEmail = emails[i];

        // Creo una condizione per la quale SE il valore della mail inserita dall'utente corrisonde ad uno degli elementi nel mio array, avrò come risultato "true" e mi stamperà Presente
        if(userEmail === registeredEmail){
            areEmailsInArray = true;
            console.log('Presente')
        // ALTRIMENTI stamperà Assente
        } else{
            console.log('Assente')
        }

    }

    
})