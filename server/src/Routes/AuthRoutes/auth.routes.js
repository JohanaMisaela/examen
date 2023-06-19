const express = require("express");
const {login, signin} = require("../../Controllers/AuthControllers");

const router = express.Router();

// Route de login
router.post('/login', login);
router.post('/signUp', signin);


module.exports = router;