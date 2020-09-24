// require('dotenv').config()


var express = require('express')
const bodyParser = require('body-parser')
var app = express()
var port = 3000;

//khai báo mongose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');


app.set('view engine', 'pug')
app.set('views', './views')

//lưu trữ file tĩnh trong public
app.use(express.static('public'))


app.use(express.static('public')) //Khai báo sử dụng file tĩnh public
app.use(bodyParser.json()) //Khai báo để sử dụng res.body 
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//khai báo router
var userRouter = require('./routes/user.route')
var authRouter = require('./routes/auth.route')
var productRouter = require('./routes/product.route')
var cartRouter = require('./routes/cart.route')
var apiProductRouter = require('./api/routes/product.route')

var authMiddlewares = require('./middlewares/auth.middlewares')
var sessionMiddlewares = require('./middlewares/session.middleware')
var countCartMiddlewares = require('./middlewares/countCart.middleware')
//khai báo đọc cookie
var cookieParser = require('cookie-parser')


// chèn signedCookie để hash dữ liệu cookie
app.use(cookieParser('haufhuaufuau')) // hoặc sử dụng biến môi trường (module dotenv) app.use(cookieParser(process.env.SESSION_SIGNED))
app.use(sessionMiddlewares)

app.get('/', authMiddlewares.requireAuth, countCartMiddlewares,
    function(request, response, next) {
        response.render('index', {
            name: response.locals.users,
            sumCart: response.locals.sumCart
        })
    })

app.use('/users', authMiddlewares.requireAuth, userRouter)
app.use('/auth', authRouter, countCartMiddlewares)
app.use('/product', countCartMiddlewares, productRouter)
app.use('/cart', cartRouter)
app.use('/api/products', apiProductRouter)

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))



