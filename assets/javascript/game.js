/*pull a word from the dictionary not more than 12 letters not less than 7.*/
/*display a the equivalent number of blanks spaces*/
let selected = "";
let misses = 9;
let guessed = [];
let wordMatch = "";
let blank = "";
let word="kale"; /**this will be drawn from database*/
let numLets = word.length;

alert(numLets);
for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat(" "+x);
}



/*provide a guess the letter prompt with a list of already selected letters*/
/*
document.onkeyup = function() {
    selected = String.fromCharCode(KeyboardEvent.code).toLowerCase();
    alert(selected);*/
window.addEventListener('keydown', (KeyboardEvent) =>
    { console.log(KeyboardEvent.key);
        selected = (KeyboardEvent.key);

    console.log( selected);
    guessed.push(selected);
    alert(guessed);
    guessed = guessed.sort();
    console.log("This is guessed array " + guessed);
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
            location.reload();;
            }
        }

} );
/*if correct display letter in correct spaces.*/
/*if wrong decrement # of guesses remaining and add selected to already guessed display.*/

/*if no more letters are remaining congradulate the player*/
/*if no more guesses are remaining hang the player*/

/*   document.querySelector("#pattern").innerHTML = blank;

/*load new word*/
