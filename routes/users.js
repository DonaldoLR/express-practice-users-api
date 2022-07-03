const express = require('express');

const { getUsers } = require('../controllers/userController');

const router = express.Router();

// GET all users
router.get('/', getUsers);

module.exports = router;
