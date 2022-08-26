const router = require('express').Router();
const charactersControllers = require('../controllers/Character.conroler.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.get(
  '/search',
  authMiddleware,
  charactersControllers.searchCharactersController,
);
router.post(
  '/create',
  authMiddleware,
  charactersControllers.createCharactersController,
);
router.get(
  '',
  authMiddleware,
  charactersControllers.getAllCharactersController,
);
router.get(
  '/find/:id',
  authMiddleware,
  charactersControllers.findByIdController,
);
router.put(
  '/update/:id',
  authMiddleware,
  charactersControllers.updateCharactersController,
);
router.delete(
  '/delete/:id',
  authMiddleware,
  charactersControllers.deleteCharacterController,
);
module.exports = router;
