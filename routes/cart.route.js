var express = require('express')
var router = express.Router()

var controller = require('../controllers/cart.controller')

router.get('/add/:productID', controller.addToCart)
router.get('/', controller.index)

module.exports = router