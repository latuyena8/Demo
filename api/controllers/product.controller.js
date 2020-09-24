
var Product =require('../../models/product.model')

module.exports.index = function (req, res) {    
    Product.find().then(function(products){
        res.json(products)
    })
}
module.exports.create = function (req, res) {    
    Product.create(req.body).then(function(product){
        res.json(product)
    })
}
module.exports.put = function (req, res) {    
    Product.create(req.body).then(function(product){
        res.json(product)
    })
}