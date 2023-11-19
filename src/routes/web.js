const express = require('express')
const {getController, getAbc} = require('../controllers/homeController')
const router = express.Router()

//Khai bao route
router.get('/', getController)

router.get('/abc', getAbc);

module.exports = router;