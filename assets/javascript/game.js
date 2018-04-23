    //VARIABLES
   
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var remainingGuess = 9;
    var guessedLetters = [];
    var letterToGuess;
    var userInput = "";

    //FUNCTIONS

    //PC Random letter
    var alphabet = ['a','b',"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var pcGuess = alphabet[Math.floor((Math.random(alphabet.length)*26))];
        console.log("letter to guess: " + pcGuess);
        check();

    //Update Wins
    function updateWins() {
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
    };

    //Update Losses
    function updateLosses() {
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
    };

    //Update Remaining Guesses - OK
    function updateRemainingGuesses () {
        remainingGuess--;
        document.getElementById('guessLeft').innerHTML = "Remaining Guesses: " + remainingGuess;
    };

    //Reset
    function reset() {
        pcGuess = alphabet[Math.floor((Math.random(alphabet.length)*26))];
        console.log("new letter to guess: " + pcGuess);
        remainingGuess = 9;
        guessedLetters = [];
        document.getElementById("letters").innerHTML = "Your Guesses so far: ";
        document.getElementById('guessLeft').innerHTML= "Remaining Guesses: " + remainingGuess;
    };

    //Input User Guess and Check if it matches with PC Guess

    function check () {
            document.onkeyup = function(event) {
            userInput = event.key;
            console.log(userInput);
            guessedLetters.push(userInput);
            document.getElementById("letters").innerHTML = "Your Guesses so far: " + guessedLetters;
                
                if (remainingGuess !== 0) {
                    if (userInput == pcGuess) {
                    alert("Correct guess!");
                    updateWins();
                    reset();
                    } else {
                    updateRemainingGuesses();}
                } else {
                    updateLosses();
                    reset();
                    alert("You lose. Next round!");
                }
        }
    };



