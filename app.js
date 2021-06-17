const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

const data = []

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', path: '/users', data: data})
})

app.get('/', (req, res, next) => {
    res.render('add-user' , {pageTitle: 'Add User', path: '/'})
})

app.post('/add-user', (req, res, next) => {
    data.push({name: req.body.name})
    res.redirect('/users')
})

app.listen(3000)

