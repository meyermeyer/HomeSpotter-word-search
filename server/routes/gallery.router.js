const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

//new PUT route to database
router.put('/like/:id', (req,res) => {
    console.log(req.params);
    let query = `
        UPDATE "gallery"
        SET "likes"="likes"+1
        WHERE "id"=$1;`;

    pool.query(query, [req.params.id])
    .then(result => {
        console.log('in PUT /gallery/like', result);
        
        res.sendStatus(200)
    })
    .catch(error => {
        console.log('error in PUT /gallery/like', error);
        
    })
})


// // PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

//new GET route to database
router.get('/', (req,res) => {
    console.log('in /gallery');
    let query=`SELECT * FROM "gallery" ORDER BY "id";`;

    pool.query(query)
    .then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error in GET /gallery', error);
        res.sendStatus(500)
        
    })
})


// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

module.exports = router;