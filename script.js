let chooseCardMessage = "(Choose card)";;
let noCardSelectionMessage = "No card selected";
let noCardSelectionMessage = "Select 1 category";
let turnWonMessage = "You win!";
let turnLostMessage = "You lost...";
let turnDrawMessage = "Draw";
let gameWonMessage = "You are victorious!";
let gameLostMessage = "You have been defeated...";
let gameDrawMessage = "Draw"

let numberOfRounds = 5
let NumberOfCategories = 5


class Card {
    constructor( name, damage, toughness, control, mobility, utility){
        super(name, damage, toughness, control, mobility, utility)
    }
}

let card_comparison = ["", "larger", "larger", "larger", "larger", "larger"]

//One array per card, Title then category values
let Aatrox = ("Aatrox", 3, 3, 2, 2, 2);
let Akali = ("Akali", 3, 1, 1, 3, 1);
let Bard = ("Bard", 1, 1, 3, 2, 3);
let Diana = ("Diana", 3, 2, 2, 2, 1);
let Galio = ("Galio", 2, 3, 3, 2, 1);
let Janna = ("Janna", 1, 1, 3, 1, 3);
let Kalista = ("Kalista", 3, 1, 1, 3, 2);
let Zyra = ("Zyra", 3, 1, 3, 1, 1);
let Zilean = ("Zilean", 2, 1, 2, 2, 3);
let Yone = ("Yone", 3, 1, 2, 3, 1);
let Veigar = ("Veigar", 3, 1, 3, 1, 1);
let TwistedFate = ("Twisted Fate", 3, 1, 2, 2, 2);
let Taliyah = ("Taliyah", 3, 1, 2, 1, 3);
let Skarner = ("Skarner", 1, 3, 3, 1, 1);
let Sett = ("Sett", 2, 2, 2, 2, 1);
let Senna = ("Senna", 2, 1, 2, 1, 3);
let Samira = ("Samira", 3, 2, 1, 3, 1);
let Riven = ("Riven", 3, 2, 2, 3, 1);
let Rengar = ("Rengar", 3, 1, 2, 2, 1);
let Qiyana = ("Qiyana", 3, 1, 2, 2, 1);
let Nocturne = ("Nocturne", 3, 1, 2, 2, 2);
let Nautilus = ("Nautilus", 1, 3, 3, 1, 1);
let Lux = ("Lux", 3, 1, 2, 1, 2);
let LeeSin = ("Lee sin", 3, 2, 2, 3, 1);
let Kennen = ("Kennen", 3, 1, 3, 1, 1);
let Jinx = ("Jinx", 3, 1, 2, 1, 1);
let Irelia = ("Irelia", 2, 2, 2, 3, 2);
let Gragas = ("Gragas", 2, 3, 3, 2, 1);
let Fiddlesticks = ("Fiddlesticks", 3, 1, 3, 1, 1);

//group cards in 1 array
let allCards = ["Aatrox", "Akali", "Bard", "Diana", "Galio", "Janna", "Kalista", "Zyra", "Zilean", 
"Yone", "Veigar", "Twisted Fate", "Taliyah", "Skarner", "Sett", "Senna", "Samira", "Riven", "Rengar",
"Qiyana", "Nocturne", "Nautilus", "Lux", "Lee Sin", "Kennen", "Jinx", "Gragas", "Fiddlesticks" ]

//list of cards for player to choose
// list of arrays with variable name + title of card
let cardsList = [[Aatrox, "Aatrox"], [Akali, "Akali"], [Bard, "Bard"] [Diana, "Diana"], [Galio, "Galio"], [Janna, "Janna"], [Kalista, "Kalista"], [Zyra, "Zyra"], [Zilean, "Zilean"], 
[Yone, "Yone"], [Veigar, "Veigar"], [TwistedFate, "Twisted Fate"], [Taliyah, "Taliyah"], [Skarner, "Skarner"], [Sett, "Sett"], [Senna, "Senna"], [Samira, "Samira"], [Riven, "Riven"],
[Rengar, "Rengar"], [Qiyana, "Qiyana"], [Nocturne, "Nocturne"], [Nautilus, "Nautilus"], [Lux, "Lux"], [LeeSin, "Lee Sin"], [Kennen, "Kennen"], [Jinx, "Jinx"], [Gragas, "Gragas"], 
[Fiddlesticks, "Fiddlesticks"]];

// buttons to start the game/turns
let StartGameButton;
let startTurnButton;
let newGameButton;

//initiate variables

let ChosenCard;
let chosenCategories;
let Player1Cards;
let Player2Cards;
let Player1Points;
let Player2Points;
let currentPlayer1Card;
let currentPlayer2Card;

//function to shuffle arrays
function shuffleCards() {
    let currentIndex = allCards.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = allCards[currentIndex];
        allCards[currentIndex] = allCards[randomIndex];
        allCards[randomIndex] = temporaryValue;
    }

}

