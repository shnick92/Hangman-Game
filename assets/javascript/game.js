    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var word = ["prince", "elvis", "jimi", "beatles", "queen"];
    var userText = document.getElementById("answer");
    var randWord = word[Math.floor(Math.random() * word.length)];
    var s;
    var count = 0;
    var guesses = [];
    var wrong = [];
    var answerArry = randWord.split("");
    var remainingLetters = word.length;
    console.log(answerArry);

    function startUp() {
        for (var i = 0; i < answerArry.length; i++) {
          var placeholder = answerArry[i];
          placeholder = document.createElement("span");
          placeholder.setAttribute("letter", placeholder);
          placeholder.append("_ ");
          document.getElementById("answer").append(placeholder);
          };
    };

    function Letter() {
      var letter = document.getElementById("letter").value;
      console.log(letter)
      if (letter.length > 0) {
        for (var x = 0; x < word.length; x++) {
          console.log("letter in for", letter)
          console.log("word[x]",word[x])
          if (word[x] === letter) {
            answerArry[x] = letter;
            console.log("answerArry", answerArry)
          }
        }

      

      count++;
      console.log("answer outside for", answerArry)
      document.getElementById("counter").innerHTML = "Number of guesses: " + count;
           
      }

      if(count > 5) {
        document.getElementById("stat").innerHTML = "You just played yoself.";
      }
      if(count === 10) {
        alert("You lose, try again!");
      }

      console.log(count);

      document.onkeypress = function(event) {//on a key press
            var letter = event.key;
            //NOTE: The line below will add the letter that was guessed directly after your blank spaces, so be aware of that.
            //document.getElementById("answer").innerHTML = letter;
            var selection = answerArry.indexOf(letter);
            var guess = guesses.indexOf(letter);
            if (guess === -1) { //if the guess hasnt already been guessed
                guesses.push(letter);
                if (selection === -1) { //and it is not in the answer take a life and add it to wrong
                    wrong.push(letter);
                //NOTE: you're not getting the right element here. What's the id you actually need? (HINT: It's in your html)
                    document.getElementById("guessid").innerHTML = wrong;
                //     // lives = lives-1;
                }
                else { 
                  //Step 0: retrieve the current board of underscores and guessed letters from the html
                  var answerboard = document.getElementById("answer").textContent;
                  answerboard = answerboard.split(" ");
                  console.log(answerboard);
                  //Step 2: Since the answerboard matches your answer in length, the index of a letter in your answerArry is the same as 
                  //the index of its position in answerboard. Use this knowledge to replace the underscores in answerboard. 
                  //(Bonus: set this up so it works even if the guessed)
                  for (var j = 0; j < answerArry.length; j++) {
                      if (answerArry[j] === letter) {
                      answerboard[j] = answerArry[j];
                      remainingLetters--;
                      console.log("HI");
                      console.log(answerboard);
                      }
                  }


                  
                  //Step 3: Turn answerboard back into a string and set the text content of the element with the answer id to be
                  //answerboard.

                  answerboard = answerboard.join(" ");
                  document.getElementById("answer").textContent = answerboard;

                  
                }
                
            }
      }
    };

    startUp();
    Letter();  