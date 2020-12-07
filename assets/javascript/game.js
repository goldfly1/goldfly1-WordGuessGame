
let selected = "";
let misses = 5;
let guessed = [];
let wordMatch = "";
let blank = "";
let word = "";
let randy = ["Fizzling","Quiz","Quinsy","Jives","Babbling","Bopped","Swizz","Shagginess","Zigzagging","Buzzed","Klutz","Ivory","Banjo","Azure","Blizzard","Baffles","Buffoon","Daiquiri","Queue","Groggy","Vortex","Voodoo","Schnapps","Schizophrenia","Zephyr","Spritz","Thriftless","Thumbscrew","Squawk","Voyeurism","Vaporize","Zodiac","Rhubarb","Transgress","Rickshaw","Snazzy","Quixotic","Knapsack","Jinx","Affix"];

word = randy[Math.floor(Math.random() * randy.length)].toLowerCase();

for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat(" "+ x );
}



/*provide a guess the letter prompt with a list of already selected letters*/
/*
document.onkeyup = function() {
    selected = String.fromCharCode(KeyboardEvent.code).toLowerCase();
    alert(selected);*/
window.addEventListener('keydown', (KeyboardEvent) =>
    { console.log(KeyboardEvent.key);
        let keyIn = (KeyboardEvent.key);
        let good = false;
        selected = keyIn.toLowerCase(););

        if (keyIn >= "a" && keyIn <= "z"){
                if (guessed.indexOf(keyIn) === -1){
                guessed.push(selected);
                guessed = guessed.sort();
                if (wordMatch.indexOf(keyIn)!=-1){
                    good = true;
                        }else {
                            misses--;
                            if( misses === 0){
                                alert("Goodbye to you");
                                location.reload();
                             }else {alert("Bad Choice.  You are one step closer."); }}
                }else{ alert("Already chosen, try again.");}
        } else { alert("You must chose a letter.  Try again.");}




    if (good != false){
    for (x=0;x< wordMatch.length;x++){
        if (selected === wordMatch.charAt(x)){
            if (x === blank.length){
                (blank = blank.slice(0, blank.length ) + selected);
                }
                else {blank = blank.slice(0, x) + selected + blank.slice(x+1);
                }

            }
            console.log(blank);
            console.log(x);
            if (blank === wordMatch){
            alert("Gratz!  You Win!");
            location.reload();
            }
        }
    }

}



/*   document.querySelector("#pattern").innerHTML = blank;


