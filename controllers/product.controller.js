
// // import db.js vào
// var db = require('../db')

// //md5 - hash dữ liệu
// var md5 = require('md5')

// var Product = require('../models/product.model')
// //export từng module
// module.exports.index = function (req, res) {
//     // Product.find().then(function(products){
//     //     res.render('product/index',{
//     //         product:products
//     //     })
//     //     var a =products
//     // })
//     var page = parseInt(req.query.page) || 1 //Trang số n
//     var numberPage = 9                     // 8sp /trang
//     var start = (page -1) * numberPage
//     var end = page*numberPage
//     var product = db.get('products').drop(start).take(numberPage).value()
//     var theStart=true
//     var theEnd=true
//     var amount = product.length
//     if (page ==1){
//         theStart=false
//     }
//     if (amount < numberPage){
//         theEnd=false
//     }
//     res.render('product/index',{
//         product: product,
//         page: [page-1,page,page+1,theStart,theEnd]
//                 // product: db.get('product').value().slice(start,end)
//     })
//     res.locals.page = parseInt(req.query.page)
// }

var Product =require('../models/product.model')

module.exports.index = function (req, res) {    
    Product.find().then(function(products){
        res.render('product/index',{
            product:products
        })
    })
}