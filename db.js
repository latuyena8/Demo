
//Khai báo để sử dụng lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

//Set giá trị mặc định cho db
db.defaults({ users:[], sessions:[] })
.write()

module.exports = db

// var mongoose = require('mongoose')
// const uri = "mongodb+srv://admin:Thisiswar@cluster0.6cafr.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"

//     mongoose.connect(uri, {
//         useUnifiedTopology:true,
//          useNewUrlParser:true
//         })
//     mongoose.connection.on('connected',()=>{
//         console.log('connected...')
//     })

// module.exports = connectDB