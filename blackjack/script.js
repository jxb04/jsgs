// 
// blackjack
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

let deck = [];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
}

for (let i = 0; i<deck.length; i++) {
    console.log ( deck[i]);
}
let playerCards = [ deck[0], deck[2] ];

console.log("Welcome to Blackjack");

console.log("Your are dealt: ");
console.log(" " + playerCards[0] );
console.log(" " + playerCards[1] );