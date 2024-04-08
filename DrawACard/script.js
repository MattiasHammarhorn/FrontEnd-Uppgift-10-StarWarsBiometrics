const cardButton = document.querySelector('#cardButton');
const cardContainer = document.querySelector('#cardContainer');
const deckofcardsAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

cardButton.addEventListener('click', function() {
    fetch(deckofcardsAPI)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let card = data.cards[0];
            cards.push(new Card(card.suit, card.value, card.images.png));

            cardContainer.innerHTML = '';
            // let img = document.createElement('img');
            // img.setAttribute('src',card.images.png);
            cardContainer.innerHTML = `
            <div class="card">
                <img src="${card.images.png}">
                <div class="card-body">
                    <div class="card-title">
                        ${card.suit} ${card.value}
                    </div>
                </div>
            </div>`;

            // cardContainer.appendChild(img);
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