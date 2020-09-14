//set SessionId cho mỗi phiên đăng nhập
//SignedCookie để bảo mật cookie

var shortid= require('shortid')
var db = require('../db')

module.exports = function(req, res, next){
    if (!req.signedCookies.sessionID){
        var sessionID = shortid.generate()
        res.cookie('sessionID',sessionID,{
            signed:true
        })

        db.get("sessions")
          .push({
              id: sessionID
          }).write()
    }    
    next()
}