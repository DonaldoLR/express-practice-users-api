const User = require('../models/userModel');
const mongoose = require('mongoose');

// GET ALL users
const getUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 });
	res.status(200).json({ name: 'John Doe', age: 20 });
};
// GET a SINGLE user

// CREATE a user

// DELETE a user

// UPDATE a user

module.exports = {
	getUsers,
};
