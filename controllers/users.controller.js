// import db.js vào
var db = require('../db')

//shortid để sử dụng khóa tự tạo của module shortid
var shortid = require('shortid')

//export từng module
module.exports.index = function(request, response) {
    console.log(db.get('users').value())
    response.render('users/index', {
        users: db.get('users').value()
    })
}
module.exports.viewUsers = function(req, res) {
    var id = req.params.id
    var viewUser = db.get('users').find(x => x.id == id).value()

    res.render('users/view', {
        users: viewUser
    })
}
module.exports.search = function(resquest, response) {

    console.log(resquest.query)
    var q = resquest.query.q
    var matchedUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    console.log(resquest.query)
    response.render('users/index', {
        users: matchedUsers
    })
}
module.exports.create = function(req, res) {
    console.log(req.body)
    console.log(res.locals)

    req.body.id = shortid.generate()
    req.body.avatar = req.file.path.split('\\').slice(1).join('/')
    db.get('users').push(req.body).write()
    res.redirect('/users')
}