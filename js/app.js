// variabile per identificare endpoint del server
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';



// chiamata AJAX
// creazione fx async per ottenere email randomica
async function getEmail() {

    // variabile per richiesta HTTP
    const response = await fetch(endpoint);
    // console.log(response);

    // variabile del dato ottenuto dal server, letto in JS 
    const data = await response.json();
    
    // visualizzare in UI email ottenuta dal server
    ul.innerHTML += `<li>${data.response}</li>`;
}

// nodo per agganciarci al DOM
const bodyEl = document.querySelector('body');

//crezione elemento lista per impaginare dati output del server 
const ul = document.createElement('ul');
bodyEl.append(ul);


// generare fino a 10 email randomiche in UI
let i= 0
while (i < 10) {
    getEmail()
    i++
}

