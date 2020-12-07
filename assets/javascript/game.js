
let selected = "";
let misses = 5;
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
        let keyIn = (KeyboardEvent.key);
        let good = false;
        selected = keyIn.toLowerCase();
    /*
    if between a and z
    if not on list
    put on list
    if not bad choice
    */
        if (keyIn => "a" || keyIn <= "z"){
            console.log("keyIn ,",keyIn);

            console.log("guessed.indexOf(keyIn) ",guessed.indexOf(keyIn));

            if (guessed.indexOf(keyIn) != false){
                guessed.push(selected);
                guessed = guessed.sort();
                console.log("guessed.push(selected) ",guessed.push(selected));
                console.log("wordMatch.indexOf(keyIn) ,",wordMatch.indexOf(keyIn));
                if (wordMatch.indexOf(keyIn)==true){
                    good = true;
                        }else {
                            misses--;
                            console.log("misses ",misses);
                            if( misses === 0){
                                alert("Goodbye to you");
                                location.reload();
                             }else {alert("Bad Choice.  You are one step closer."); }}
                }else{ alert("Already chosen, try again.");}
        } else { alert("You must chose a letter.  Try again.");}




    if (good != false){
    console.log( selected);
    alert(guessed);
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
            location.reload();
            }
        }
    }

}

);
/*if correct display letter in correct spaces.*/
/*if wrong decrement # of guesses remaining and add selected to already guessed display.*/

/*if no more letters are remaining congradulate the player*/
/*if no more guesses are remaining hang the player*/

/*   document.querySelector("#pattern").innerHTML = blank;

/*load new word*/
