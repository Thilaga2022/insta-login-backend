const express = require('express')
// Install 'cors' to prevent CORS errors
const cors = require('cors')

const app = express()
app.use(cors())

var uname = ["Thilaga", "1234567890", "insta@gmail.com"]
var pass = 1234

app.get('/login', function (req, res) {
    if (uname[0] === req.query.username && pass === Number(req.query.password)) {
        
        res.send(true)
    }
    if (Number(uname[1]) === Number(req.query.username) && pass === Number(req.query.password)) {
        res.send(true)
    }
     if (uname[2] === req.query.username && pass === Number(req.query.password)) {
        res.send(true)
    }
    else {
        res.send(false)
    }
})

app.listen(3000, function () {
    console.log("Server started...!")
})