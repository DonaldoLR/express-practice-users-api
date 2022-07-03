const express = require('express');

const {
	getUsers,
	getUser,
	createUser,
	deleteUser,
	updateUser,
} = require('../controllers/userController');

const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET a SINGLE user
router.get('/:id', getUser);

// CREATE a user
router.post('/', createUser);

// DELETE a user
router.delete('/:id', deleteUser);

// PATCH a user
router.patch('/:id', updateUser);
module.exports = router;
