
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
// module.exports.put = function (req, res) { 
//     var newvalues = {name: "IPhone PUT new PUT", description: "IPhone PUT newPUT" } ;
//     Product.updateOne({name: "IPhone PUT"},newvalues).then(function(product){
//         res.json(product)
//     })
// }
// module.exports.delete = function (req, res) {    
//     Product.delete(req.body).then(function(product){
//         res.json(product)
//     })
// }