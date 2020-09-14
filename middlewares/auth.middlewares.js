//So sánh lại cookie có trùng trong Database hay không, nếu không phải đăng nhập lại

//SignedCookie để bảo mật cookie
var db = require('../db')

module.exports.requireAuth = function(req, res, next){
    if (!req.signedCookies.userID){
        res.redirect('/auth/login')
        return
    }
    var user = db.get('users').find({id: req.signedCookies.userID}).value()
    if (!user){        
        res.redirect('/auth/login')
        return
    }
    res.locals.user = user
    next()
}