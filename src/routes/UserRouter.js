const router = require('express').Router();

const userController = require('../controllers/UserController');

router.get('/', userController.getAllUsersController);
router.post('/creat', userController.createUsersController);
module.exports = router;
