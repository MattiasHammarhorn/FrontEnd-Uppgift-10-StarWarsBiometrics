const cardButton = document.querySelector('#cardButton');
const cardContainer = document.querySelector('#cardContainer');
const deckofcardsAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

cardButton.addEventListener('click', function() {
    fetch(deckofcardsAPI)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let card = data.cards[0];
            cards.push(new Card(card.suit, card.value));
            cardContainer.innerHTML = ``;
        })
        .catch(err => console.log(err));
})

class Card {
    constructor(suit, value, imageLink) {
        this.suit = suit;
        this.value = value;
        this.imageLink = imageLink;
    }
}

var cards = [];