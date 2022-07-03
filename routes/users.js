const express = require('express');

const {
	getUsers,
	getUser,
	createUser,
} = require('../controllers/userController');

const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET a SINGLE user
router.get('/:id', getUser);

// CREATE a user
router.post('/', createUser);

module.exports = router;
