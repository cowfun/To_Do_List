const Express = require('express');

router.get('/', (request, response) => {
  console.log(request.body);
  response.render('index', 'Hello World');
})

const PORT = 4545;
app.listen(
  PORT,
  () => console.log(`Server listening on http://localhost:${PORT}`)
)
