const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getOneContact);

router.post('/addContact', contactsController.addContact);

router.put('/updateContact/:id', contactsController.updateContact);

router.delete('/deleteContact/:id', contactsController.deleteContact);

module.exports = router;
