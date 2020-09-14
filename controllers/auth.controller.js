
// import db.js vào
var db = require('../db')

//md5 - hash dữ liệu
var md5 = require('md5')

//export từng module
module.exports.login = function (req, res) {
    res.render('auth/login')
}
module.exports.postLogin = function (req, res) {
    var matchLogin= db.get('users').value().find(x => x.email == req.body.email)
    var errors;
    if (!matchLogin){
        res.render('auth/login',{
            errors: ['Email does not exist'],
            values: req.body
        })
        return
    }

    var hashedPassword = md5(req.body.password) 
    if ( hashedPassword !== matchLogin.password ){
        res.render('auth/login',{
            errors: ['Wrong password'],
            values: req.body
        })
        return
    }

    res.cookie('userID',matchLogin.id,{
        signed:true
    })
    res.redirect('/users/')
}