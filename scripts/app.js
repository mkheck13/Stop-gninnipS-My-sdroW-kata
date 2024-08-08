// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"



// so we are going to need a few methods for this one
// we can use .split() to get the individual chars
// .map() to map thru them
// a statement to check if the word is more or less then 5 chars
// if it is more or equal to 5 then we will need to reverse it
// to do that we can use .split() , .reverse() and .join() to get the reversed words
// if its less then we just return the word with no changes
function spinWords(string){
    return string.split(" ").map(function(word){
        if(word.length >= 5){
            return word.split("").reverse().join("");
        }else{
            return word;
        }
    }).join(" ");
}