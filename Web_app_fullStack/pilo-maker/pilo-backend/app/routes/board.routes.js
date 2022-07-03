const board = require('../controllers/BoardController');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Retrieve all board
router.get("/", auth ,board.findAll);

// Create a new Tutorial
router.post("/", auth,  board.create);


// Retrieve all published board
router.get("/published",auth, board.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", auth, board.findOne);

// Update a Tutorial with id
router.put("/:id", auth, board.update);

// Delete a Tutorial with id
router.delete("/:id", auth, board.delete);

// Create a new Tutorial
router.delete("/", auth, board.deleteAll);
 
module.exports = router;
