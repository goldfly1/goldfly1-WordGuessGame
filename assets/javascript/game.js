
let selected = "";
let misses = 6;
let guessed = [];
let wordMatch = "";
let blank = "";
let word = "";
let randy = ["Fizzling","Quiz","Quinsy","Jives","Babbling","Bopped","Swizz","Shagginess","Zigzagging","Buzzed","Klutz","Ivory","Banjo","Azure","Blizzard","Baffles","Buffoon","Daiquiri","Queue","Groggy","Vortex","Voodoo","Schnapps","Schizophrenia","Zephyr","Spritz","Thriftless","Thumbscrew","Squawk","Voyeurism","Vaporize","Zodiac","Rhubarb","Transgress","Rickshaw","Snazzy","Quixotic","Knapsack","Jinx","Affix"];
let youWin = false;
word = randy[Math.floor(Math.random() * randy.length)].toLowerCase();

for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat(" "+ x );
}



/*provide a guess the letter prompt with a list of already selected letters*/


window.addEventListener('keydown', (KeyboardEvent) =>
    { console.log(KeyboardEvent.key);
        let keyIn = (KeyboardEvent.key);
        let good = false;
        selected = keyIn.toLowerCase();

        if (keyIn >= "a" && keyIn <= "z"){
                if (guessed.indexOf(selected) === -1){
                guessed.push(selected);
                guessed = guessed.sort();
                console.log("guessed  " + guessed);
                if (wordMatch.indexOf(keyIn)!=-1){
                    good = true;
                        }else {
                            misses--;
                            if( misses === 0){
                                update();
                                goodbye();
                                location.reload();
                             }else {
                                update();
                                bad(); }}
                }else{already();}
        } else { wrongType();}




    if (good != false){
        afraid();
    for (x=0;x < wordMatch.length;x++){
        if (selected === wordMatch.charAt(x)){
            if (x === blank.length){
                (blank = blank.slice(0, blank.length ) + selected);
                }
                else {blank = blank.slice(0, x) + selected + blank.slice(x+1);
                }

            }
            win();

            if (youWin === true){
            break;
            }
        }
        if (youWin === true){
          location.reload();
        }
    }

}

);/*This is the end of my event call*/



  function update() {
    document.querySelector("#steps").innerHTML = "Steps: "+ misses ;
    document.querySelector("#guessed").innerHTML = guessed;
    document.querySelector("#word").innerHTML = blank;
  }
  function win() {
            update();
            if (blank === wordMatch){
            alert("Gratz!  You Win!\n\n"+word.toUpperCase());
            youWin = true;
            }
  }
  function wrongType() {
    document.querySelector("#billboard").innerHTML = "You must key a letter....";

  }
  function already() {
    document.querySelector("#billboard").innerHTML = "Already used, go again: ";
  }
  function bad() {
    document.querySelector("#billboard").innerHTML = "Bad choice. You are one step closer";
  }
  function goodbye() {
    document.querySelector("#billboard").innerHTML = "Goodbye to you";
  }
  function afraid() {
    document.querySelector("#billboard").innerHTML = "Don't let them see you're afraid kid!";
  }

/*   document.querySelector("#pattern").innerHTML = blank;*/
