const { response } = require("express");
const Author = require("../models/author.model");

module.exports.index = (req, res) => {
  res.json({
    message: "You are Connected to the DB"
  })
}
module.exports.findAllAuthors = (req, res) => {
  Author.find({},[],{sort: {name:1 }}) 
    .then(allDaAuthors => res.json({ authors: allDaAuthors }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));

};

module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};
