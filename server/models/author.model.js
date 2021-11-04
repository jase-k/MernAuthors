const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [6, "Name must be at least 6 characters long"],
	}
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;