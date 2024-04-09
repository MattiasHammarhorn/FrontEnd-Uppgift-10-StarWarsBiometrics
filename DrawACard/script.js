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
    cardContainer.innerHTML = `
    <div class="card">
        <img class="img-fluid" src="${card.images.png}">
        <div class="card-body">
            <div class="card-title">
                <h2>${card.value} OF ${card.suit}</h2>
            </div>
        </div>
    </div>`;
}