/*pull a word from the dictionary not more than 12 letters not less than 7.*/
/*display a the equivalent number of blanks spaces*/
let wordMatch = "";
let wordPattern = "";
let blank = "";
let word="abcdeabcdabc";
let numLets = word.length;
alert(numLets);
for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat("_"+x);
    console.log(blank);
    console.log(wordMatch);
}

wordPattern = blank;

/*provide a guess the letter prompt with a list of already selected letters*/
/*if correct display letter in correct spaces.*/
/*if wrong decrement # of guesses remaining.*/

/*if no more letters are remaining congradulate the player*/
/*if no more guesses are remaining hang the player*/

document.querySelector("#pattern").innerHTML = wordPattern;
/*load new word*/
