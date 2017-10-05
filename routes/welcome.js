const Express = require('express');
const router = Express.Router();
const kx = require('../db/connection')

router.get('/', (request, response) => {
  console.log(request.body)
  kx
    .select()
    .from('tasks')
    .then(tasks => {
      response.render('index', {content: null, tasks})
    })
})

router.post('/', (request, response) => {
  const {body} = request;
  const {content} = request.body;

  kx
    .insert({content: content})
    .into(`tasks`)
    .then(response.redirect('/'))
})

module.exports = router;
