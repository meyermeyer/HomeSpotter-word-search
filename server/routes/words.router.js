const express = require('express');
const pool = require('../modules/pool');
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
    console.log('removeShortWords', words);
    words.map((word, j)=>{
        words.map((otherWord)=>{
            for(let i=0; i<otherWord.length; i++){
                //if other word is longer, if other word contains first letter of 'word, 
                //and if word length is less than remaining letters in string, check for matches
                if (otherWord.length > word.length && otherWord[i] === word[0] && word.length <= otherWord.length - i+1) {
                    //if substring starting at matching letter of length same length as 'word' is word, 
                    //remove from array
                    console.log('potential match', word, otherWord, otherWord[i]);
                    if (otherWord.substring(i, i + word.length) === word) {
                        reducedWordList.splice(j,1)
                    }
                }            
            }
        })
        // foundWords.push(word)
    })
    console.log('reducedWordList', reducedWordList, words);
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
    console.log('foundWords in POST', foundWords);
    removeShortWords(foundWords)
    res.sendStatus(200)
})

router.get('/all', (req,res)=>{
    console.log('in GET /', foundWords);
    res.send(foundWords)
})

router.get('/reduced', (req,res)=>{
    console.log('in GET /reduced');
    res.send(reducedWordList)
    
})

module.exports = router;
