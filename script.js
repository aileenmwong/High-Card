var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
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

  // get user input and store it in a variable
  let newPlayer = prompt(`${deal()} Do you want to add a player? `);
  /* check agains already guessed letters */
    if(userGuessedArray.includes(userGuess)) {
      userGuess = prompt(`I think you forgot that you have already tried that letter! ${gameState()} Try again: `);
    } else {
      userGuessedArray.push(userGuess);
    }
  return userGuess;
}


 },
 /*
  deal(){
//Assigns one card to each player.
//randomly selects an index from the deck arrya

  },
  findHighestCard(){
//Finds the player with the highest card.
//Aces are high. For now, don't worry about ties, nor about one suit being more valuable than another suit.

//compare all of the wins to see who has the highest card (like tic tac toe)

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
  game.announceWinners();
  }
  */
}

console.log(game.buildDeck());
console.log(game.shuffleDeck());
