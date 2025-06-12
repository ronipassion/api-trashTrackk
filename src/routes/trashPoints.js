const express = require('express');
const { addTrashPoint, getTrashPoints } = require('../controllers/trashPointController');

const router = express.Router();

router.route('/')
    .get(getTrashPoints)
    .post(addTrashPoint);

module.exports = router;