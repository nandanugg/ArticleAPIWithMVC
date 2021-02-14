require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('views'))


const articleController = require('./controller/articleController')
app.get('/', articleController.get)
app.post('/', articleController.add)
app.get('/delete', articleController.delete)
app.post('/edit', articleController.edit)


const port = process.env.PORT
app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
})