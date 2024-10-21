const express = require('express');
const router = express.Router();


const MailerController = require('../../controller/MailerController');


router.post('/envioEmail', MailerController.sendContactEmail);

module.exports = router;
