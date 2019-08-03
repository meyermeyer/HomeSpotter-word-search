const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const fs = require("fs");
// const text = require(__dirname + "/dict-words.txt")
// var text = fs.readFileSync(__dirname + "/dict-words.txt", "utf-8");
let dictionary = fs.readFileSync(__dirname + "/dict-words.txt").toString('utf-8');
//make dictionary an array of strings
let dictionaryArray = dictionary.split("\n")
let potentialWords

let foundWords = []
router.post('/', (req,res)=>{
    console.log('req.body', req.body);
    
    potentialWords = req.body
    
    for (word of dictionaryArray) {
        // console.log('all the words', word);
        if (potentialWords[word]) {
            console.log('word', word);
            foundWords.push(word)
        }
    }
    res.sendStatus(200)
})

router.get('/', (req,res)=>{
    console.log('in GET');
    res.send(foundWords)
})











module.exports = router;
