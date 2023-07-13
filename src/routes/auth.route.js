const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/UserController');

// Authentication routes
router.post('/login', authController.loginController);
router.post('/register', userController.createUsersController);

module.exports = router;
