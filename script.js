var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var worth = [];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck(){
// Populates the deck array with 52 standard playing cards.
// loop through all values for each suit and attach value to the suit, then loop through all cards and push into the empty deck
// as you are looping through the array, push into the empty deck
  //for loop that loops through suits
    //for loop that loops through values

  //add property of worth to card

  //assign a value of worth to each letter / number

  //push those values into an array in order of value

    //create an empty object card
    let card = {};
    //loop through the suits
    for (let i = 0; i < suits.length; i++) {
      //loop through the values
      for (let j = 0; j < values.length; j++) {
        //assign the suit an index value
        card.suit = suits[i];
        //assign the value an index value
        card.value = values[j];
        //assign worth to the each value based on index number(THIS DOESNT SEEM RIGHT)
        worth.push(values[i]);
        //push the card into the deck
        this.deck.push(card);
        //empty the object for a new card
        card = {};
      }
    }
    return this.deck;
  },

  shuffleDeck(){
  // Randomizes the order of deck.
  // Math.random(deck)
  //use Durstenfeld shuffle
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //loop through this.deck, each time decreasing by one
    for (var i = this.deck.length - 1; i > 0; i--) {
        //assign j to a random number with the index i + 1
        var j = Math.floor(Math.random() * (i + 1));
        //assign the deck index i to a temp variable
        var temp = this.deck[i];
        //assign the deck index i to a different array, deck index j
        this.deck[i] = this.deck[j];
        //assign the deck index j to temp variable to generate randomized array
        this.deck[j] = temp;
    }
    //return new array
    return this.deck;
  },

  getMorePlayers(){
//Asks the user if they want to add an additional player to the game.
//If they do, the player is added to the players array. If not, the script continues.
//prompt user for an additional player to the game
//if they answer yes, then push a player into the empty array
  //let new Player equal an index in the array of players
  let newPlayer = this.players[i];
  // get user input and store it in a variable
  let newPlayerInput = prompt('Do you want to add a player?');
    //if they don't input anything, then do nothing
    if (newPlayerInput === null) {
      break;
    //if they input something
    } else if (input.length === 1) {
      //increase the number of players
      (newPlayer++);
      //push in a new player into the array
      this.player.push(newPlayer);
      }
  },

  deal(){
//Assigns one card to each player.
//randomly selects an index from the deck array
    //loop through all of the players
    for (let i = 0; i < players.length; i++) {
    //pop out a card and assign it to variable card
      let card = game.deck.pop();
    //add to the object card and assign a player
      cardPlayer = card.player
    //push the card to the player hand array
      game.hands.push(card);
    }
  },

  findHighestCard(){
//Finds the player with the highest card.
//Aces are high. For now, don't worry about ties, nor about one suit being more valuable than another suit.
//compare all of the wins to see who has the highest card (like tic tac toe)

  //if card value of player 1 is higher than the value of player 2, then player 1 wins
  if (card.worth[0] > card.worth[1]) {
    alert ('Player 1 wins!');
  //if card value of player 1 is higher than the value of player 2, then player 1 wins
  } else if (card.worth[0] < card.worth[1]){
    alert ('Player 2 wins!');
  }

  },
  announceWinners(){
// Alerts the card each player drew, their name, and their ranking. For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!" (Dialogs are annoying.
//How could you show all this in one alert box, rather than one for each player?)

 },
  playANewGame(){
  game.buildDeck();
  game.shuffleDeck();
  game.getMorePlayers();
  game.deal();
  game.findHighestCard();
  game.announceWinners();
  }
}

console.log(game.buildDeck());
console.log(game.shuffleDeck());
console.log(game.getMorePlayers());
console.log(game.deal())
console.log(game.findHighestCard());
console.log(game.announceWinners());
