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
    // console.log(data);

    // 
    console.log(data.response);


}

getEmail()

