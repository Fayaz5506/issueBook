const express = require('express');
const {issueBook, returnBook} = require('../controller/issueBookController');

const router = express.Router();

router.post('/issue', issueBook);
router.post('/return', returnBook);

module.exports = router;