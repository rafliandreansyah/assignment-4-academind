const express = require('express')

const app = express()
const router = express.Router()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: false}))

const data = []

router.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', path: '/users', data: data})
})

router.get('/', (req, res, next) => {
    res.render('add-user' , {pageTitle: 'Add User', path: '/'})
})

router.post('/add-user', (req, res, next) => {
    data.push({name: req.body.name})
    res.redirect('/users')
})
app.use(router)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Not Found'})
})
app.listen(3000)

