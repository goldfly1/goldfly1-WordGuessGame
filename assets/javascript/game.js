/*pull a word from the dictionary not more than 12 letters not less than 7.*/
/*display a the equivalent number of blanks spaces*/
let selected = "";
let misses = 9;
let guessed = [];
let wordMatch = "";
let blank = "";
let word="abcdeabcdabc"; /**this will be drawn from database*/
let numLets = word.length;

alert(numLets);
for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat("_"+x);
}
console.log(blank);
console.log(wordMatch);



/*provide a guess the letter prompt with a list of already selected letters*/
/*
document.onkeyup = function() {
    selected = String.fromCharCode(KeyboardEvent.code).toLowerCase();
    alert(selected);*/
window.addEventListener('keydown', (KeyboardEvent) =>
    { console.log(KeyboardEvent.key)});

    console.log( selected);
    guessed.push(selected);
    alert(guessed);
    guessed.sort();
    console.log("This is guessed array " + guessed);
    for (x=0;x< wordMatch.length;x++){
        if (selected === wordMatch.charAt(x)){
            if (x = 0) {
                (blank = selected + blank.slice(x+1, blank.length));
            }else if (x = blank.length){
                (blank = blank.slice(0, x-1) + selected);
            }else blank = blank.slice(0, x-1) + selected + blank.slice(x+1, blank.length);

         console.log(blank);
        }
}

;
/*if correct display letter in correct spaces.*/
/*if wrong decrement # of guesses remaining and add selected to already guessed display.*/

/*if no more letters are remaining congradulate the player*/
/*if no more guesses are remaining hang the player*/

/*   document.querySelector("#pattern").innerHTML = blank;

/*load new word*/
