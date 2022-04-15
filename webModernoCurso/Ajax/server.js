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

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end("Ocorreu um Erro")
        }

        res.end('concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
        res.send({
            ...req.body,
            id: 1
        })
})

app.get('/teste', (req, res) => res.send('ok'))
app.listen(8080,() => console.log('Executando'))