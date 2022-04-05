import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'

// express config
const app = express()
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(express.static(path.join(__dirname, "../public")))

// handlebars
app.engine('.hbs', engine( { extname: '.hbs' } ))
app.set('view engine', '.hbs')
app.set('views', './pages')

// Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => console.log("Server is running on http://localhost:8080"))