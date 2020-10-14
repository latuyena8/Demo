var express = require('express')
var router = express.Router()
var controller = require('../controllers/product.controller')
router.get('/',controller.index)
router.post('/',controller.create)
// router.put('/',controller.put)
// router.delete('/',controller.delete)
module.exports = router