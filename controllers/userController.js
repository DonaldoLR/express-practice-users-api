const User = require('../models/userModel');
const mongoose = require('mongoose');

// GET ALL users
const getUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 });
	res.status(200).json({ users });
};
// GET a SINGLE user
const getUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such user' });
	}

	const user = await User.findById(id);

	if (!user) {
		return res.status(404).json({ error: 'No such user' });
	}

	res.status(200).json(user);
};
// CREATE a user
const createUser = async (req, res) => {
	const { name, age } = req.body;

	try {
		const user = await User.create({ name, age });
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: error.essage });
	}
};
// DELETE a user

// UPDATE a user

module.exports = {
	getUsers,
	getUser,
	createUser,
};
