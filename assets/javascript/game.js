$(document).ready(function() {

    // List of strings/ Possible asnwers
      var listOfCountries = ["Austria", "Croatia", "Czech Republic", "Germany", "Hungary", "Poland", "Slovakia", "Slovenia", "Switzerland", "Romania", "Belgium", "Netherlands", "Luxembourg"]
        
    //List of main Variables set to any number/boolean    
      const maximumGuesses = 10
      var endGame = false
      var LettersGuessed
      var userGuess
      var wins = 0
      var guessedRight
      var numberofGuesses
     
      Reset()
       
      // Wait for key press // make sure they're alpha (actual letters)
      guessedRight = newFunction(guessedRight, listOfCountries);
    
          document.onkeypress = function(event) {
              if (isAlpha(event.key) && !endGame) {
              checkForLetter(event.key.toUpperCase())
              }
          }
          var isAlpha = function(ch){
            return /^[A-Z]$/i.test(ch);
          }
    
    
          //checking in console to make sure it only accepts alpha letters
          console.log(isAlpha("C"));   // true
          console.log(isAlpha("d"));   // true
          console.log(isAlpha("%"));   // false
          console.log(isAlpha("4"));   // false
      
      
      // Game Functions and Responses to guessed letters
      // Search for the letter within the possible answers 
          function checkForLetter(letter) {
           var correctLetter = false
              for (var i=0, j= guessedRight.length; i<j; i++) {
                  if (letter === guessedRight[i]) {
                      correctLetter = true
                      userGuess[i] = letter
      // show the +1 under the winner section when guessed correctly
      // seperate the ling of strings with a space instead of a comma with .join("")
                  if (userGuess.join("") === guessedRight) {
                    wins++
                    endGame = true
      // generate new guess word by refreshing the page after 2 seconds
                    freshPage()
                    setTimeout(Reset,2000)
                  }
              } 
          }
    
      // Show picked letters
              if (!correctLetter) {   
      //checks if the array does not include the guessed letter and displays the incorrect choice under the LettersGuessed section          
              if (!LettersGuessed.includes(letter)) {
                    LettersGuessed.push(letter)
      //take off one GuessesRemaining from the total
                    numberofGuesses--
          }
      //show the correct answer and start a new game after 2 seconds //split the 
              if (numberofGuesses === 0) {
                    userGuess = guessedRight
                    endGame = true
                    setTimeout(Reset, 2000)
              }
          }
      
      // Start Over
          freshPage()
      
          }
       //reset when the maxiumum number of guesses (10) is reached 
          function Reset() {
          numberofGuesses = maximumGuesses
          endGame = newFunction()
       // Generate a new word
          guessedRight = listOfCountries[Math.floor(Math.random() * listOfCountries.length)].toUpperCase()
              console.log(guessedRight)
      
      // Reset everything //new game
          LettersGuessed = []
          userGuess = []
          //when user picks the letter change the _ to the corresponding letter under NameACountry
              for (var i=0, j=guessedRight.length; i < j; i++){
              if (guessedRight[i] === " ") {
                  userGuess.push(" ")
          } 
              else {
                  userGuess.push("_")
              }
          }
      
          freshPage()
          function newFunction() {
                  return false;
              }
          }
      
          function freshPage () {
              document.getElementById("NameCountry").innerText = userGuess.join("")
              document.getElementById("WinsTracker").innerText = wins
              document.getElementById("GuessesRemaining").innerText = numberofGuesses
              document.getElementById("LettersGuessed").innerText =  LettersGuessed.join(" ")
          }
      })
    
    function newFunction(guessedRight, listOfCountries) {
        guessedRight = listOfCountries[Math.floor(Math.random() * listOfCountries.length)].toUpperCase();
        console.log(guessedRight);
        return guessedRight;
    }
      