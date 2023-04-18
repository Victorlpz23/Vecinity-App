const express = require('express');
const router = express.Router();
const communitiesControllers = require('../controllers/communities.controllers');


router.get('/communities', communitiesControllers.list),
router.post('/communities', communitiesControllers.create),
router.get('/communities/:id', communitiesControllers.detail),
router.patch('/communities/:id', communitiesControllers.update),
router.delete('/communities/:id', communitiesControllers.update),

module.exports = router


