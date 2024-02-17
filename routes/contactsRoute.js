const express = require('express');
const router = express.Router();

const validation = require('../middleware/validate');

const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getOneContact);

router.post('/', validation.saveContact, contactsController.addContact);

router.put('/:id', validation.saveContact, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
