const router = require('express').Router();
const userControllers = require('../controllers/UserController');
const authMiddleware = require('../middlewares/auth.middleware.js');

// User routes
router.post('/create', userControllers.createUsersController);
router.get('/', authMiddleware, userControllers.getAllUsersController);

module.exports = router;
