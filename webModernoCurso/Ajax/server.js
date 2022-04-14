const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

app.use(express.static('.'))
app.use(bodyparser.urlencoded({extended : true}))
app.use(bodyparser.json())

const storage = multer.diskStorage({
    destination : function(req , file, callback) {
        callback(null, './upload')
    },
    filename: function(req , file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

app.get('/teste', (req, res) => res.send('ok'))
app.listen(8080,() => console.log('Executando'))