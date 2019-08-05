const express = require('express');
const router = express.Router();
const fs = require("fs");

let dictionary = fs.readFileSync(__dirname + "/dict-words.txt").toString('utf-8');
//make dictionary an array of strings
let dictionaryArray = dictionary.split("\n")
let dictionaryObject = {}

//store dictionary in object for easier/faster searching
for(let word of dictionaryArray) {
    dictionaryObject[word] = word
}
let potentialWords
let foundWords = []
let reducedWordList = []

//function to remove short words contained in longer words
let removeShortWords = (words)=>{
    reducedWordList.push(...words)
    words.map((word, j)=>{
        words.map((otherWord)=>{
            for(let i=0; i<otherWord.length; i++){
                //if other word is longer, if other word contains first letter of 'word, 
                //and if word length is less than remaining letters in string, check for matches
                if (otherWord.length > word.length && otherWord[i] === word[0] && word.length <= otherWord.length - i ) {
                    //if substring starting at matching letter of length same length as 'word' is word, 
                    //remove from array
                    if (otherWord.substring(i, i + word.length) === word) {
                        let index = reducedWordList.indexOf(word)
                        //prevent instance where word is contained in more than one of the other words don't try to remove the same word twice
                        if (index>-1){
                            reducedWordList.splice(index, 1)
                        }
                    }
                }            
            }
        })
    })

}

router.post('/', (req,res)=>{
    potentialWords = Object.keys(req.body)
    foundWords = []
    for (let string of potentialWords) {
        //reverse each string
        let reverse = string.split("").reverse().join("")
        if (dictionaryObject[string]){
            foundWords.push(string)
        }
        // check reverses as well
        else if (dictionaryObject[reverse]) {
            foundWords.push(reverse)
        }
    }
    //run bonus mode function to remove small words contained in larger words
    removeShortWords(foundWords)
    res.sendStatus(200)
})

router.get('/all', (req,res)=>{
    res.send(foundWords)
    foundWords = []
})

router.get('/reduced', (req,res)=>{
    res.send(reducedWordList)
    reducedWordList = []
})

module.exports = router;
