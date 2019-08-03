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

// console.log('dictionary object', dictionaryObject)
router.post('/', (req,res)=>{
    potentialWords = Object.keys(req.body)
    foundWords = []
    // console.log('potentialWords', potentialWords)
    // console.log('dictionary object', dictionaryObject)
    for (let string of potentialWords) {
        console.log('potentialWords strings', string)
        let reverse = string.split("").reverse().join("")
        if (dictionaryObject[string]){
            foundWords.push(string)
        }
        // check reverses as well
        else if (dictionaryObject[reverse]) {
            foundWords.push(reverse)
        }
    }
    res.sendStatus(200)
})

router.get('/', (req,res)=>{
    console.log('in GET');
    res.send(foundWords)
})

module.exports = router;
