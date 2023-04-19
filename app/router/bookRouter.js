const express = require('express');
const bookController = require('../controller/bookController');
const userHasBookController = require('../controller/userHasBookController');
const validation = require('../services/validation');
const { validateToken } = require('../middelware/authentication');
const bookRouter = express.Router();



// route des livres de l'utilisateur
/**
 * @swagger
 * /book/my:
 *   get:
 *     summary: List of available books of the user
 *     tags: [User_Has_Book]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All of the user's available books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 isbn:
 *                   type: string
 *                 cover_page:
 *                   type: string
 *                 editor:
 *                   type: string
 *                 publication_date:
 *                   type: string
 *                 language:
 *                   type: string
 *                 pages_number:
 *                   type: string
 *                 height:
 *                   type: string
 *                 width:
 *                   type: string
 *                 thickness:
 *                   type: string
 *                 work_id:
 *                   type: integer
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                 title:
 *                   type: string
 *                 resume:
 *                   type: string
 *                 name:
 *                   type: string
 *                 category_name:
 *                   type: string
 *                 book_id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 availability:
 *                   type: string
 *                 status:
 *                   type: string
 *                 format:
 *                   type: string
 */
bookRouter.get('/my', validateToken, validation.userId, userHasBookController.userBooks);

/**
 * @swagger
 * /book/{bookId}/my:
 *   post:
 *     summary: Add a book to the user
 *     tags: [User_Has_Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: bookId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID of the book to add
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Status of the book to add
 *             required:
 *               - status
 *     responses:
 *       200:
 *         description: book added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: { "message": "The book has been add to your givenbooks list" }
 */
bookRouter.post('/:bookId/my', validateToken, validation.bookId, validation.userId, validation.addUserBook, userHasBookController.addUserBook);

/**
 * @swagger
 * /book/{bookId}/my:
 *   patch:
 *     summary: Update a book to the user
 *     tags: [User_Has_Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: bookId
 *         in: path
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the book to update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Status of the book to update
 *               availability:
 *                 type: string
 *                 description: Availability of the book to update          
 *     responses:
 *       200:
 *         description: book updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 book_id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 availability:
 *                   type: string
 *                 status:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 */
bookRouter.patch('/:bookId/my', validateToken, validation.updateUserBook, validation.bookId, validation.userId, userHasBookController.updatedUserBook);

/**
 * @swagger
 * /book/{bookId}/my:
 *   delete:
 *     summary: Delete a book to the user
 *     tags: [User_Has_Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: bookId
 *         in: path
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the book to delete  
 *     responses:
 *       200:
 *         description: book deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: { "message": "The book with ID X has been removed from the list of books to give away" }
 */
bookRouter.delete('/:bookId/my', validateToken, validation.userId, validation.bookId, userHasBookController.deleteUserBook);

/**
 * @swagger
 * /book/givenbook/my:
 *   get:
 *     summary: List of books given by the user
 *     tags: [User_Has_Book]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All of the user's given books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 isbn:
 *                   type: string
 *                 cover_page:
 *                   type: string
 *                 editor:
 *                   type: string
 *                 publication_date:
 *                   type: string
 *                 language:
 *                   type: string
 *                 pages_number:
 *                   type: string
 *                 height:
 *                   type: string
 *                 width:
 *                   type: string
 *                 thickness:
 *                   type: string
 *                 work_id:
 *                   type: integer
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                 title:
 *                   type: string
 *                 resume:
 *                   type: string
 *                 name:
 *                   type: string
 *                 category_name:
 *                   type: string
 *                 book_id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 availability:
 *                   type: string
 *                 status:
 *                   type: string
 *                 format:
 *                   type: string
 */
bookRouter.get('/givenbook/my', validateToken, validation.userId, userHasBookController.givenUserBook);

/**
 * @swagger
 * /book/{bookId}/allusers:
 *   get:
 *     summary: Get all users who give this book
 *     tags:
 *       - User_Has_Book
 *     parameters:
 *       - name: bookId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: Id of the book
 *     responses:
 *       200:
 *         description: List of users who give the book
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   city:
 *                     type: string
 *                   email:
 *                     type: string
 *                   status:
 *                     type: string
 *                   format:
 *                     type: string
 */
bookRouter.get('/:bookId/allusers', validation.bookId, userHasBookController.allUsersByBookId);



// route livre(s)
/**
 * @swagger
 * /book/latestadded:
 *   get:
 *     summary: Latest books added
 *     tags:
 *       - Book
 *     responses:
 *       200:
 *         description: Latest books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 editor:
 *                   type: string
 *                 cover_page:
 *                   type: string
 *                 language:
 *                   type: string
 *                 category_name:
 *                   type: string
 *                 availability:
 *                   type: string
 */
bookRouter.get('/latestadded', bookController.latestbooks);

/**
 * @swagger
 * /book/search:
 *   get:
 *     summary: Result of searched book
 *     tags:
 *       - Book
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: Query to search book by name, author, category or isbn
 *     responses:
 *       200:
 *         description: Result of searched book
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  id:
 *                   type: integer
 *                  title:
 *                   type: string
 *                  resume:
 *                   type: string
 *                  category_id:
 *                   type: integer
 *                  created_at:
 *                   type: string
 *                   format: date-time
 *                  updated_at:
 *                   type: string
 *                   format: date-time
 *                  isbn_13:
 *                   type: integer
 *                  cover_page:
 *                   type: string
 *                  editor:
 *                   type: string
 *                  publication_date:
 *                   type: string
 *                  language:
 *                   type: string
 *                  pages_number:
 *                   type: string
 *                  height:
 *                   type: string
 *                  width:
 *                   type: string
 *                  thickness:
 *                   type: string
 *                  work_id:
 *                   type: integer
 *                  author:
 *                   type: string
 *                  category:
 *                   type: string
 */
bookRouter.get('/search', validation.searchBook, bookController.searchBook);

/**
 * @swagger
 * /book/{bookId}:
 *   get:
 *     summary: Details of one book
 *     tags:
 *       - Book
 *     parameters:
 *       - name: bookId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: Id of the book
 *     responses:
 *       200:
 *         description: Detail of a book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                  type: integer 
 *                 isbn_13:
 *                  type: integer
 *                 cover_page:
 *                  type: string
 *                 editor:
 *                  type: string
 *                 publication_date:
 *                  type: string
 *                 language:
 *                  type: string
 *                 pages_number:
 *                  type: string
 *                 height:
 *                  type: string
 *                 width:
 *                  type: string
 *                 thickness:
 *                  type: string
 *                 work_id:
 *                  type: integer
 *                 created_at:
 *                  type: string
 *                  format: date-time
 *                 updated_at:
 *                  type: string
 *                  format: date-time
 *                 author:
 *                  type: string
 *                 category_name:
 *                  type: string
 */
bookRouter.get('/:bookId', validation.bookId, bookController.bookDetails);

module.exports = bookRouter;