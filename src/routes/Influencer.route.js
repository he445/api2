const router = require('express').Router();
const influencerControllers = require('../controllers/Influencer.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.get(
  '/search',
  authMiddleware,
  influencerControllers.searchInfluencersController,
);
router.post(
  '/create',
  authMiddleware,
  influencerControllers.createInfluencerController,
);
router.get(
  '/',
  authMiddleware,
  influencerControllers.getAllInfluencersController,
);
router.get(
  '/find/:id',
  authMiddleware,
  influencerControllers.findByIdController,
);
router.put(
  '/update/:id',
  authMiddleware,
  influencerControllers.updateInfluencerController,
);
router.delete(
  '/delete/:id',
  authMiddleware,
  influencerControllers.deleteInfluencerController,
);
module.exports = router;
