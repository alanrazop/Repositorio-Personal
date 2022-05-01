const express = require('express');
const router = express.Router();
const isAuth = require('../controller/is-auth.js');
const usersController = require('../controller/users_controller');

router.get('/login', usersController.get_login);

router.post('/login', usersController.login);

router.get('/logout', usersController.logout);

router.get('/signup', usersController.get_signup);

router.post('/signup', usersController.post_signup);

router.get('/view/:id', usersController.get_view);

router.get('/', isAuth, usersController.root);

module.exports = router;