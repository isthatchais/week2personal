const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getOneContact);

router.post('/', contactsController.addContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
