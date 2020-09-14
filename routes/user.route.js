var express = require('express')
var router = express.Router()
var multer  = require('multer')

//import controller => lấy những function callback vào
var controller = require('../controllers/users.controller')
var validate = require('../validate/user.validate')

// get users list
router.get('',controller.index)

// get ViewDetail 
router.get('/view/:id', controller.viewUsers)

//get user search
router.get('/search',controller.search)
// => Create Users

router.get('/create',function(req,res){
    res.render('users/create')
})

//multer: uploads avatar khi tạo tài khoản
var upload = multer({ dest: './public/uploads/' })
// post create user
router.post('/create', 
    upload.single('avatar'),
    validate.postCreate, 
    controller.create
)

//router set cookie
router.get('/cookie',function(req,res,next){
    res.cookie('user-id',123)
    res.send('Hello'+req.cookies.name)
})
module.exports = router