// import db.js vào
var db = require('../db')

//md5 - hash dữ liệu
var md5 = require('md5')

//export từng module
module.exports.addToCart = function(req, res) {
    var sessionID = req.signedCookies.sessionID
    var productID = req.params.productID

    var count = db.get('sessions')
        .find({ id: sessionID })
        .get('cart.' + productID, 0)
        .value()

    db.get('sessions')
        .find({ id: sessionID })
        .set('cart.' + productID, count + 1)
        .write()
    res.redirect('/product')
}
module.exports.index = function(req, res) {
    var sessionID = req.signedCookies.sessionID
        // var cart = db.get('sessions')
        //     .find({ id: sessionID })
        //     .get('cart.' + '9b3e0dd2-e5be-403d-aa67-1854d8607970', 0)
        //     .value()

    var sessionCart = db.get('sessions').find({ id: 'A_tEhuM8A' }).get('cart').value()
    console.log(sessionCart)
    var products = [{
        "id": "9b3e0dd2-e5be-403d-aa67-1854d8607970",
        "name": "Wine - Zinfandel California 2002",
        "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fjordan-nike-converse-nba-all-star-2020-collection-release-date-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
        "description": "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque"
    }]
    var productCart = []
        // for (const keyCart in sessionCart)
        //     for (const key in products) {
        //         if (keyCart == key)
        //             productCart.push(products)
        //     }



    for (const keyCart in sessionCart) {
        products.forEach((element) => {
            for (const property in element) {
                if (element.id == keyCart) {
                    productCart.push(element)
                    break;
                }
            }
        });
    }
    res.cookie('product', JSON.stringify(productCart))
    res.render('cart/index', {
        cart: productCart
    })
}