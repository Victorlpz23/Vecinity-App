const express = require('express');
const router = express.Router();

// Controllers
const communitiesControllers = require('../controllers/communities.controllers');
const usersControllers = require('../controllers/users.controllers');
const claimsControllers = require('../controllers/claims.controllers');
const eventsControllers = require('../controllers/events.controllers');
const forumTopicsControllers = require('../controllers/forumTopics.controllers');

// Middlewares
const communitiesMid = require('../middlewares/communities.mid');
const usersMid = require('../middlewares/users.mid');
const claimsMid = require('../middlewares/claims.mid');
const secure = require('../middlewares/secure.mid');
const eventsMid = require('../middlewares/events.mid');
const forumTopicsMid = require('../middlewares/forumTopics.mid');

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


// Event
router.get('/communities/:id/events', secure.auth, communitiesMid.exists, eventsControllers.list);
router.post('/communities/:id/events', secure.auth, communitiesMid.exists,  eventsControllers.create);
router.get('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, eventsControllers.detail);
router.patch('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, eventsControllers.update);
router.delete('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, eventsControllers.delete);



// Claims
router.get('/communities/:id/claims', communitiesMid.exists, claimsControllers.list);
router.post('/communities/:id/claims', secure.auth, communitiesMid.exists, claimsControllers.create);
router.get('/communities/:id/claims/:claimId', secure.auth, communitiesMid.exists, claimsMid.exists, claimsControllers.detail);
// todo patch for the manager
router.delete('/communities/:id/claims/:claimId', secure.auth, communitiesMid.exists, claimsMid.exists, claimsMid.checkAuthor, claimsControllers.delete);

// //Contacts
// router.get('/communities/:id/contacts', contactsMid.exists, contactsController.list);
// router.post('/communities/:id/contacts', secure.auth, contactsController.create);
// router.get('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contactsController.detail);
// router.patch('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contactsController.update);
// router.delete('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contactsController.delete);

// Forum Topic
router.get('/communities/:id/forumTopics', secure.auth, communitiesMid.exists, forumTopicsControllers.list);
router.post('/communities/:id/forumTopics', secure.auth, communitiesMid.exists,  forumTopicsControllers.create);
router.get('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopicsControllers.detail);
router.patch('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopicsControllers.update);
router.delete('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopicsControllers.delete);






module.exports = router;


