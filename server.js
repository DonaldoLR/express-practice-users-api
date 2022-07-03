require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect tot DB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Listen for request
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB & listening to port');
		});
	})
	.catch((err) => {
		console.log(err);
	});
