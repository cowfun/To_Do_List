const Express = require('express');

const app = Express();

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('index')
})

const PORT = 4545;

app.listen(
  PORT,
  () => console.log(`Server listening on http://localhost:${PORT}`)
)
