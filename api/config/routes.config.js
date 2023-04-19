const express = require('express');
const router = express.Router();
const communitiesControllers = require('../controllers/communities.controllers');
const usersControllers = require('../controllers/users.controllers');
const claimsControllers = require('../controllers/claims.controllers');
const communitiesMid = require('../middlewares/communities.mid');
const usersMid = require('../middlewares/users.mid');
const claimsMid = require('../middlewares/claims.mid');


router.get('/communities', communitiesControllers.list);
router.post('/communities', communitiesControllers.create);
// router.post('/communities/:id/join', communitiesControllers.join)
router.get('/communities/:id', communitiesMid.exists, communitiesControllers.detail);
router.patch('/communities/:id', communitiesMid.exists, communitiesControllers.update);
router.delete('/communities/:id', communitiesMid.exists, communitiesControllers.delete);

router.get('/users', usersControllers.list);
router.post('/users', usersControllers.create);
router.get('/users/:id', usersMid.exists, usersControllers.detail);
router.get('/users/:id/confirm', usersControllers.confirm);
router.patch('/users/:id', usersMid.exists, usersControllers.update);
router.delete('/users/:id', usersMid.exists, usersControllers.delete);


router.get('/communities/:id/claims', communitiesMid.exists, claimsControllers.list);
router.post('/communities/:id/claims', communitiesMid.exists, claimsControllers.create);
router.get('/communities/:id/claims/:claimId', communitiesMid.exists, claimsMid.exists, claimsControllers.detail);
router.delete('/communities/:id/claims/:claimId', communitiesMid.exists, claimsMid.exists, claimsControllers.delete);





module.exports = router;


