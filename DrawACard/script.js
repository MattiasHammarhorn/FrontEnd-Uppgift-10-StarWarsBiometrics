import Card from './card.js';

const cardButton = document.querySelector('#cardButton');
const cardContainer = document.querySelector('#cardContainer');
const deckofcardsAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

var cards = [];

cardButton.addEventListener('click', function() {
    fetch(deckofcardsAPI)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let card = data.cards[0];
        printCard(card);
        // cards.push(new Card(card.suit, card.value, card.images.png));
    })
    .catch(err => console.log(err));
})

function printCard(card) {
    cardContainer.innerHTML = '';
    // cardContainer.innerHTML = `
    // <div class="card">
    //     <img class="img-fluid" src="${card.images.png}">
    //     <div class="card-body">
    //         <div class="card-title">
    //             <h2>${card.value} OF ${card.suit}</h2>
    //         </div>
    //     </div>
    // </div>`;

    let cardDiv = document.createElement('div');
    cardDiv.classList.add("card");

    let cardImg = document.createElement('img'); 
    cardImg.classList.add("img-fluid");
    cardImg.setAttribute('src', card.images.png);
    cardDiv.appendChild(cardImg);

    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement('div');
    cardTitle.classList.add("card-title");

    let cardHeader = document.createElement('h2');
    cardHeader.innerHTML = `${card.value} OF ${card.suit}`;
    cardTitle.appendChild(cardHeader);

    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(cardBody);

    cardContainer.append(cardDiv);
}