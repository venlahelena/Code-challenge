const express = require('express');
const Book = require('../models/Book');
const routers = express.Router();

/*Get all the book from the database*/
routers.get('/', async (request, response) => {
    try{
        const books = await Book.find();
        response.json(books);
    }catch(error){
        response.json({message:error});
    }
});

/*Gets single book from the database*/
routers.get('/:Id', async (request, response) => {
    try{
        const book = await Book.findById(request.params.Id);
        response.json(book);
    }catch(error){
        response.json({message:error});
    }
});

/*Adds new book to the database*/
routers.post('/', async (request, response) => {
    const book = new Book({
        title: request.body.title,
        author: request.body.author,
        description: request.body.description
    });
    try{
    const savedBook = await book.save()
    response.json(savedBook);
    } catch(error){
        response.json({message:error});
    }
});

/*Delete a book from the database*/
routers.delete('/:Id', async (request, response) => {
    try{
        const removedBook = await Book.remove({_id: request.params.Id});
        response.json(removedBook);
    }catch(error){
        response.json({message:error});
    }
});

/*Updates exisiting book in the database*/
routers.patch('/:Id', async (request, response) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(request.params.Id, request.body);
        response.json(updatedBook);
    }catch(error){
        response.json({message:error});
    }
});

module.exports = routers;