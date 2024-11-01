const express = require('express');
const { SignupController } = require('../Controllers/User.Signup');
const { LoginController } = require('../Controllers/User.Login');
const { ProfileController } = require('../Controllers/User.Profile');
const router = express.Router();

router.post("/signup",SignupController);
router.post("/login",LoginController);
router.get("/profile",ProfileController);

module.exports=router;