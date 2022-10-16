const router = require('express').Router();
const charactersControllers = require('../controllers/Character.conroler.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.get(
  '/search',

  charactersControllers.searchCharactersController,
);
router.post(
  '/create',

  charactersControllers.createCharactersController,
);
router.get('/', charactersControllers.getAllCharactersController);
router.get('/find/:id', charactersControllers.findByIdController);
router.put(
  '/update/:id',

  charactersControllers.updateCharactersController,
);
router.delete('/delete/:id', charactersControllers.deleteCharacterController);
module.exports = router;
