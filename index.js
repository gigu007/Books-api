const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const db = require('./queries')
const port=2907
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true
    })


)
app.get('/',(request,response)=>{
    response.json({info:'Node.js,Express,and Postgres Api'})
})
app.get('/genres',db.getGenres)
app.get('/genre/:id',db.getGenreById)
app.post('genres',db.createGenre)
app.put('/genres/:id',db.upDateGenre)
app.delete('genres/:id',db.deleteGenre)
app.listen(port,()=>{
    console.log(`App running on port ${port}.`)
})