const express = require('express');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');
const validation = require('../services/validation');
const { validateToken } = require('../middelware/authentication');
const userRouter = express.Router();

/** */





// route inscription, login, logout

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
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               passwordConfirm:
 *                 type: string
 *               city:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 city:
 *                   type: string
 *                 picture:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
userRouter.post('/signup', validation.signup, userController.signup);
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
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 city:
 *                   type: string
 *                 picture:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
userRouter.post('/login', validation.login, sessionController.login);
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
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Logout message
 *                   example: "You are now logged out"
 */

userRouter.post('/logout', validateToken, sessionController.logout);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */



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
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 city:
 *                   type: string
 *                 picture:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
userRouter.get('/me', validateToken, validation.userId, userController.userDetails);






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
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User name
 *               email:
 *                 type: string
 *                 description: User email
 *               password:
 *                 type: string
 *                 description: User new password
 *               passwordConfirm:
 *                 type: string
 *                 description: New password confirmation
 *               city:
 *                 type: string
 *                 description: User city
 *               picture:
 *                 type: string
 *                 description: User profile picture
 *     responses:
 *       '200':
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 city:
 *                   type: string
 *                 picture:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */

userRouter.patch('/me', validateToken, validation.userId, validation.updateUser, userController.update);

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
 *         description: User account deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Your account is now deleted
 */
// route modification et suppression du user


userRouter.delete('/me', validateToken, validation.userId, userController.delete);


module.exports = userRouter;