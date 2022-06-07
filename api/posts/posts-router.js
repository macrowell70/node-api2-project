// implement your posts router here
const Posts = require('./posts-model');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ 
            message: "The posts information could not be retrieved" 
        })
    })
})

module.exports = router;