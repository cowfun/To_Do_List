const Express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// ROUTES
const welcome = require('./routes/welcome')

const app = Express();
app.set('view engine', 'ejs')
app.use(Express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', welcome)

const PORT = 4545;
app.listen(
  PORT,
  () => console.log(`Server listening on http://localhost:${PORT}`)
)
