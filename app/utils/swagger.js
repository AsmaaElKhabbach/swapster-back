//**COMPONENTS */

/**************/
/*    JWT     */
/**************/

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**************/
/*  SCHEMAS   */
/**************/

/**
 * @swagger
 * components:
 *   schemas:
 *     UserSignupRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         passwordConfirm:
 *           type: string
 *         city:
 *           type: string
 *       required:
 *         - name
 *         - email
 *         - password
 *         - passwordConfirm
 *         - city
 *
 *     UserLoginRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - email
 *         - password
 *
 *     UserUpdateRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User name
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: User new password
 *         passwordConfirm:
 *           type: string
 *           description: New password confirmation
 *         city:
 *           type: string
 *           description: User city
 *         picture:
 *           type: string
 *           description: User profile picture
 *
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         isbn:
 *           type: string
 *         cover_page:
 *           type: string
 *         editor:
 *           type: string
 *         publication_date:
 *           type: string
 *         language:
 *           type: string
 *         pages_number:
 *           type: string
 *         height:
 *           type: string
 *         width:
 *           type: string
 *         thickness:
 *           type: string
 *         work_id:
 *           type: integer
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *         title:
 *           type: string
 *         resume:
 *           type: string
 *         name:
 *           type: string
 *         category_name:
 *           type: string
 *         book_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         availability:
 *           type: string
 *         status:
 *           type: string
 *         format:
 *           type: string
 *
 *     BookToAdd:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           description: Status of the book to add
 *         availability:
 *           type: string
 *           description: Availability of the book to update
 *       required:
 *         - status
 *
 */

/**************/
/*  RESPONSES */
/**************/

/**
 * @swagger
 * components:
 *   responses:
 *     UserInfoResponse:
 *       description: User response object
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         city:
 *           type: string
 *         picture:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *
 *     LogoutSuccessful:
 *       description: Logout successful
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Logout message
 *                 example: "You are now logged out"
 *
 *     UserAccountDeleted:
 *       description: User account deleted
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Account deleted message
 *                 example: "Your account is now deleted"
 *
 *     BookUpdatedResponse:
 *       description: book updated
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               book_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *               availability:
 *                 type: string
 *               status:
 *                 type: string
 *               created_at:
 *                 type: string
 *                 format: date-time
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *
 *     UserBookResponse:
 *       description: Users who give this book
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               city:
 *                 type: string
 *               email:
 *                 type: string
 *               status:
 *                 type: string
 *               format:
 *                 type: string
 *
 */



// **ROUTE USER */

/*SIGNUP */

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: User signup
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UserSignupRequest"
 *     responses:
 *       '200':
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/responses/UserInfoResponse"
 */

/*LOGIN */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UserLoginRequest"
 *     responses:
 *       '200':
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserInfoResponse"
 */

/*LOGOUT */

/**
 * @swagger
 * /user/logout:
 *   post:
 *     summary: User logout
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/LogoutSuccessful'
 */

/*USERDETAILS */

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: User details
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserInfoResponse"
 */

/*USER UPDATE*/


/**
 * @swagger
 * /user/me:
 *   patch:
 *     summary: Update user data
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UserUpdateRequest"
 *     responses:
 *       '200':
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserInfoResponse"
 */

/*USER DELETE*/

/**
 * @swagger
 * /user/me:
 *   delete:
 *     summary: Delete user account
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/UserAccountDeleted'
 */

// **ROUTE BOOK */

// Route LatestAddedBooks//

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
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

// Route BookSearch//


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
 *                 $ref: '#/components/schemas/Book'
 */

// Route BookDetail//


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
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

// **ROUTE USERHASBOOK */


// Route UserBooks//

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
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

// Route AddUserBooks///


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


// Route UpdateUserBooks///

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
 *             $ref: '#/components/schemas/BookToAdd'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/BookUpdatedResponse'
 */

// Route DeleteUserBooks///

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

// Route UserGivenBooks///

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
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

// Route BookIdAllUsers //

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
 *         $ref: '#/components/responses/UserBookResponse'
 */