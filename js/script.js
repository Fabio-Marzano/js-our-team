//REALIZZO LA STRUTTURA DATI//

const profiles = [
    {
        nome: 'Wayne Barnett',
        img: 'wayne-barnett-founder-ceo-jpg',
        ruolo: 'Founder & CEO'
    },
    {
        nome: 'Angela Caroll',
        img: 'wayne-barnett-founder-ceo-jpg',
        ruolo: 'Founder & CEO' 
    },
    {
        nome: 'Walter Gordon',
        img: 'walter-gordon-office-manager-jpg',
        ruolo: 'Office Manager' 
    },
    {
        nome: 'Angela Lopez',
        img: 'angela-lopez-social-media-manager-jpg',
        ruolo: 'Social Media Manager' 
    },
    {
        nome: 'Scott Estrada',
        img: 'scott-estrada-developer-jpg',
        ruolo: 'Developer' 
    },
    {
        nome: 'Barbara Ramos',
        img: 'barbara-ramos-grapich-design-jpg',
        ruolo: 'Grapich Designer' 
    },
]
//MOSTRO I DATI IN CONSOLE//
console.log(profiles);
//AVVIO CICLO FOR PER GENERARE UNA STRINGA DI DATI//

let members = document.getElementById('utenti');
//RECUPERO L'ELEMENTO DAL DOM//
for (let i = 0; i < profiles.length; i++) {
    console.log(profiles[i].nome, profiles[i].ruolo, profiles[i].img);
    //RICHIAMO IL DOM E LO INIETTO IN HTML//
   members.innerHTML += `${profiles[i].nome, profiles[i].ruolo, profiles[i].img } <br>`;

    

    
        

}

