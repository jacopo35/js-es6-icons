/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

datas = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

let container = document.querySelector('.container-ul');
let filter = document.getElementById('filter');

let vegetables = datas.filter((element) => {
    return element.type == "piante";
});

let animals = datas.filter((element) => {
    return element.type == "animali";
});

let users = datas.filter((element) => {
    return element.type == "user";
});

for (let index = 0; index < datas.length; index++) {
    container.innerHTML += makeCard(datas[index]);
};

filter.addEventListener('change', function () {
    switch (filter.value) {
        case 'all':
            container.innerHTML = '';
            datas.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;

        case 'vegetable':
            container.innerHTML = '';
            vegetables.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;

        case 'animal':
            container.innerHTML = '';
            animals.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;

        case 'user':
            container.innerHTML = '';
            users.forEach((element) => {
                container.innerHTML += makeCard(element);
            });
            break;
    }
})

//funzioni
function makeCard(element) {
    const templateCard = `
        <li class="d-flex ${element.type}"><i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i><span>${element.name}</span></li>
        `;
    return templateCard;
}