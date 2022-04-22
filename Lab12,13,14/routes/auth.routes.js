const express = require('express');
const router = express.Router();
const isAuth = require('../controllers/is-auth.js');
const usersController = require('../controllers/users_controller');

router.get('/login', usersController.get_login);

router.post('/login', usersController.login);

router.get('/logout', usersController.logout);

router.get('/signup', isAuth, usersController.get_signup);

router.post('/signup', usersController.post_signup);

router.get('/view/:id', usersController.get_view);

module.exports = router;