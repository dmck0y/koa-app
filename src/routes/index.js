const Router = require('koa-router');
const db = require('db');
const User = require('models/users');

const router = Router();

router.get('/', async ctx => { ctx.status = 200 });

router.get('/user/:id', async ctx => {
  const { id } = ctx.params;
  const user = await User.query().findById(id)

  ctx.status = 200; 
  ctx.body = user;
});

router.post('/user', async ctx => {
  const { firstName, lastName } = ctx.request.query;

  const user = await User.query().insert({
    firstName,
    lastName
  });

  ctx.status = 200;
  ctx.body = 'ok'
});

module.exports = router;
