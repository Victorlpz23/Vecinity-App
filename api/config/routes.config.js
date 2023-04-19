const express = require('express');
const router = express.Router();
const communitiesControllers = require('../controllers/communities.controllers');
const communitiesMid = require('../middlewares/communities.mid');


router.get('/communities', communitiesControllers.list);
router.post('/communities', communitiesControllers.create);
// router.post('/communities/:id/join', communitiesControllers.join)
router.get('/communities/:id', communitiesMid.exists, communitiesControllers.detail);
router.patch('/communities/:id', communitiesMid.exists, communitiesControllers.update);
router.delete('/communities/:id', communitiesMid.exists, communitiesControllers.delete);

module.exports = router;


