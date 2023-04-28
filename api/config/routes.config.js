const express = require('express');
const router = express.Router();

const storage = require('./storage.config');

// Controllers
const communitiesControllers = require('../controllers/communities.controllers');
const usersControllers = require('../controllers/users.controllers');
const claimsControllers = require('../controllers/claims.controllers');
const eventsControllers = require('../controllers/events.controllers');
const forumTopicsControllers = require('../controllers/forumTopics.controllers');
const forumCommentsControllers = require('../controllers/forumComments.controllers');
const reservationsControllers = require('../controllers/reservations.controllers');
const contactsControllers = require('../controllers/contacts.controllers');

// Middlewares
const communitiesMid = require('../middlewares/communities.mid');
const usersMid = require('../middlewares/users.mid');
const claimsMid = require('../middlewares/claims.mid');
const secure = require('../middlewares/secure.mid');
const eventsMid = require('../middlewares/events.mid');
const forumTopicsMid = require('../middlewares/forumTopics.mid');
const forumCommentsMid = require('../middlewares/forumComments.mid');
const reservationsMid = require('../middlewares/reservations.mid');
const contactsMid = require('../middlewares/contacts.mid');

// Communities
router.get('/communities', communitiesControllers.list);
// secure.checkRole('admin')
router.get('/communities/:id/neighbours', communitiesMid.exists, communitiesControllers.usersList);
router.post('/communities', secure.auth, communitiesControllers.create);
router.post('/communities/join', secure.auth, communitiesControllers.join);
router.get('/communities/:id', communitiesMid.exists, communitiesControllers.detail);
router.patch('/communities/:id', secure.auth, secure.isManager, storage.single('image'), communitiesMid.exists, communitiesMid.checkManager, communitiesControllers.update);
router.delete('/communities/:id', secure.auth, communitiesMid.exists, communitiesMid.checkManager, communitiesControllers.delete);
// secure.checkRole('admin')

// Users
router.get('/users', usersControllers.list);
// secure.checkRole('admin')
router.post('/users', usersControllers.create);
router.get('/users/:id/confirm', usersMid.exists, usersControllers.confirm);
router.get('/communities/:id/users/:userId', usersMid.exists, usersControllers.detail);
router.patch('/communities/:id/users/:userId', secure.auth, storage.single('image'), usersControllers.update);
router.delete('/communities/:id/users/:userId', secure.auth, usersControllers.delete);

// Login
router.post('/login', usersControllers.login);


// Event
router.get('/communities/:id/events', secure.auth, communitiesMid.exists, eventsControllers.list);
router.post('/communities/:id/events', secure.auth, secure.isManager, communitiesMid.exists, eventsControllers.create);
router.get('/communities/:id/events/:eventId', secure.auth, communitiesMid.exists, eventsMid.exists, eventsControllers.detail);
router.patch('/communities/:id/events/:eventId', secure.auth, secure.isManager, communitiesMid.exists, eventsMid.exists, eventsControllers.update);
router.delete('/communities/:id/events/:eventId', secure.auth, secure.isManager, communitiesMid.exists, eventsMid.exists, eventsControllers.delete);


// Claims
router.get('/communities/:id/claims', communitiesMid.exists, claimsControllers.list);
router.post('/communities/:id/claims', secure.auth, communitiesMid.exists, claimsControllers.create);
router.get('/communities/:id/claims/:claimId', secure.auth, communitiesMid.exists, claimsMid.exists, claimsControllers.detail);
router.patch('/communities/:id/claims/:claimId', secure.auth, secure.isManager, communitiesMid.exists, claimsMid.exists, claimsControllers.update);
// todo patch for the manager
router.delete('/communities/:id/claims/:claimId', secure.auth, secure.isManager, communitiesMid.exists, claimsMid.exists, claimsMid.checkAuthor, claimsControllers.delete);


// Forum Topic
router.get('/communities/:id/forumTopics', secure.auth, communitiesMid.exists, forumTopicsControllers.list);
router.post('/communities/:id/forumTopics', secure.auth, communitiesMid.exists, forumTopicsControllers.create);
router.get('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopicsControllers.detail);
router.patch('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopicsControllers.update);
router.delete('/communities/:id/forumTopics/:forumTopicId', secure.auth, communitiesMid.exists, forumTopicsMid.exists, forumTopicsControllers.delete);

// Forum comments
router.get('/communities/:id/forumTopics/:forumTopicId/forumComments', secure.auth, communitiesMid.exists, forumCommentsControllers.list);
router.post('/communities/:id/forumTopics/:forumTopicId/forumComments', secure.auth, communitiesMid.exists, forumCommentsControllers.create);
router.delete('/communities/:id/forumTopics/:forumTopicId/forumComments/:forumCommentId', secure.auth, communitiesMid.exists, forumCommentsMid.exists, forumCommentsControllers.delete);


// Reservations
router.get("/communities/:id/reservations", secure.auth, communitiesMid.exists, reservationsControllers.list);
router.get("/communities/:id/reservations/:reservationId", secure.auth, communitiesMid.exists, reservationsMid.exists, reservationsControllers.detail);
router.post("/communities/:id/reservations", secure.auth, communitiesMid.exists, reservationsControllers.create);
router.delete("/communities/:id/reservations/:reservationId", secure.auth, communitiesMid.exists, reservationsMid.exists, reservationsMid.checkAuthor, reservationsControllers.delete);

// Contacts
router.get('/communities/:id/contacts', communitiesMid.exists, contactsControllers.list);
router.post('/communities/:id/contacts', secure.auth, communitiesMid.exists, contactsControllers.create);
router.get('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contactsControllers.detail);
router.patch('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contactsControllers.update);
router.delete('/communities/:id/contacts/:contactId', secure.auth, communitiesMid.exists, contactsMid.exists, contactsControllers.delete);





module.exports = router;


