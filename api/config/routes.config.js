const express = require('express');
const router = express.Router();

// Controllers
const communitiesControllers = require('../controllers/communities.controllers');
const usersControllers = require('../controllers/users.controllers');
const claimsControllers = require('../controllers/claims.controllers');

// Middlewares
const communitiesMid = require('../middlewares/communities.mid');
const usersMid = require('../middlewares/users.mid');
const claimsMid = require('../middlewares/claims.mid');
const secure = require('../middlewares/secure.mid');

// Communities
router.get('/communities', communitiesControllers.list);
router.post('/communities', secure.auth, communitiesControllers.create);
// router.post('/communities/:id/join', communitiesControllers.join)
router.get('/communities/:id', communitiesMid.exists, communitiesControllers.detail);
router.patch('/communities/:id', secure.auth, communitiesMid.exists, communitiesMid.checkManager, communitiesControllers.update);
router.delete('/communities/:id', secure.auth, communitiesMid.exists, communitiesMid.checkManager, communitiesControllers.delete);

// Users
router.get('/users', usersControllers.list);
router.post('/users', usersControllers.create);
router.get('/users/:id', usersMid.exists, usersControllers.detail);
router.get('/users/:id/confirm', usersMid.exists, usersControllers.confirm);
router.patch('/users/:id', secure.auth, usersControllers.update);
router.delete('/users/:id', secure.auth, usersControllers.delete);

// Login
router.post('/login', usersControllers.login);



// Claims
router.get('/communities/:id/claims', communitiesMid.exists, claimsControllers.list);
router.post('/communities/:id/claims', secure.auth, communitiesMid.exists, claimsControllers.create);
router.get('/communities/:id/claims/:claimId', secure.auth, communitiesMid.exists, claimsMid.exists, claimsControllers.detail);
// todo patch for the manager
router.delete('/communities/:id/claims/:claimId', secure.auth, communitiesMid.exists, claimsMid.exists, claimsMid.checkAuthor, claimsControllers.delete);






module.exports = router;


