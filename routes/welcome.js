const Express = require('express');
const router = Express.Router();

router.get('/', (request, response) => {
  response.render('index')
})

router.get('/about', (request, response) => {
  response.render('about')
})

module.exports = router;
