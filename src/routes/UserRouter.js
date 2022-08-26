const router = require('express').Router();
const userController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', userController.createUsersController);
router.get('/', authMiddleware, userController.getAllUsersController);

module.exports = router;
