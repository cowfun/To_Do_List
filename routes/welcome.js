const Express = require('express');
const router = Express.Router();

router.get('/', (request, response) => {
  response.render('index')
})

router.get('/about', (request, response) => {
  response.render('about')
})

router.post('/', (request, response) => {
  console.log(request.body)
  const {body} = request;
  response.render('index', body)
})

module.exports = router;
