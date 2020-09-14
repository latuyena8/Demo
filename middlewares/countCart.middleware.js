
var db = require('../db')

module.exports = function (req, res, next) {    
    var sum=0;
    var sessionID= req.signedCookies.sessionID
    if (sessionID)
    {        
        var cartSession = db.get('sessions')
                            .find({id: sessionID})
                            .get('cart')
                            .value()
                     
        if(cartSession){
            var countCart = Object.values(cartSession)
            sum = countCart.reduce(function(a,b){
                return a+b
            })
        }
    }
    res.locals.sumCart=sum;
    next()
}
